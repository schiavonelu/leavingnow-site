// src/hooks/usePageSeo.js
import { useEffect } from "react";
import { getActiveSeasonForNow } from "../config/seasonalSalesConfig";
import {
  CAMPAIGN_SEO_TITLE_TAIL,
  CAMPAIGN_SEO_DESCRIPTION_EXTRA,
  buildSeoKeywordsFromCampaigns,
} from "../config/seasonalSeoConfig";

/**
 * Hook SEO riutilizzabile.
 *
 * - baseTitle / baseDescription / baseKeywords → specifici della pagina
 * - useSeasonal = true → aggiunge coda stagionale (title, description, keywords)
 *
 * Da usare su:
 *  - /mete-stagionali
 *  - /mete-mare-italia
 *  - /mete-mare-estero
 *  - /mete-capitali
 * (e volendo anche altre pagine in futuro)
 */
export const usePageSeo = ({
  baseTitle,
  baseDescription,
  baseKeywords = "",
  useSeasonal = false,
}) => {
  useEffect(() => {
    let finalTitle = baseTitle;
    let finalDescription = baseDescription;
    let finalKeywords = baseKeywords;

    if (useSeasonal) {
      const { campaigns } = getActiveSeasonForNow();

      if (campaigns && campaigns.length > 0) {
        // 1️⃣ Coda titolo
        const withTitleTail = campaigns.find(
          (c) => CAMPAIGN_SEO_TITLE_TAIL[c.id]
        );
        if (withTitleTail) {
          const tail = CAMPAIGN_SEO_TITLE_TAIL[withTitleTail.id];
          if (tail) {
            finalTitle = `${baseTitle} | ${tail}`;
          }
        }

        // 2️⃣ Extra description
        const withDescExtra = campaigns.find(
          (c) => CAMPAIGN_SEO_DESCRIPTION_EXTRA[c.id]
        );
        if (withDescExtra) {
          const extra = CAMPAIGN_SEO_DESCRIPTION_EXTRA[withDescExtra.id];
          finalDescription = `${baseDescription}${extra}`;
        }

        // 3️⃣ Keywords extra
        const extraKeywords = buildSeoKeywordsFromCampaigns(campaigns);
        if (extraKeywords) {
          finalKeywords = baseKeywords
            ? `${baseKeywords}, ${extraKeywords}`
            : extraKeywords;
        }
      }
    }

    // <title>
    if (finalTitle) {
      document.title = finalTitle;
    }

    // meta description
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag && finalDescription) {
      descTag.setAttribute("content", finalDescription);
    }

    // OG title
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag && finalTitle) {
      ogTitleTag.setAttribute("content", finalTitle);
    }

    // OG description
    const ogDescTag = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescTag && finalDescription) {
      ogDescTag.setAttribute("content", finalDescription);
    }

    // meta keywords (partendo da quelle statiche dell’index + extra di pagina)
    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag && finalKeywords) {
      keywordsTag.setAttribute("content", finalKeywords);
    }
  }, [baseTitle, baseDescription, baseKeywords, useSeasonal]);
};
