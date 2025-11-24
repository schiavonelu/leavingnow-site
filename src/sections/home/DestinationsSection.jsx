import DestinationSplit from "./DestinationSplit.jsx";

// Import locali delle immagini WebP
import europaImg from "../../assets/home/europa.webp";
import americheCaraibiImg from "../../assets/home/americhe-caraibi.webp";
import africaImg from "../../assets/home/africa.webp";
import asiaImg from "../../assets/home/asia.webp";
import oceaniaImg from "../../assets/home/oceania.webp";

const destinations = [
  {
    title: "Europa",
    subtitle: "Tra cultura e bellezza",
    text: "Un viaggio nelle capitali più antiche del mondo e nelle città che hanno segnato la nostra storia. Dalle città d’arte alle coste del Mediterraneo, è il luogo perfetto per chi vuole scoprire cultura, sapori e panorami unici.",
    image: europaImg,
    imageLeft: false,
    delay: 80,
    linkTo: "/destinazioni/europa",
  },
  {
    title: "Americhe e Caraibi",
    subtitle: "Esperienze tra sogno e avventura",
    text: "USA, Canada, Messico, Cuba e le isole caraibiche: tra grandi città, strade infinite e spiagge da sogno. Dai parchi americani ai grattacieli, ogni viaggio è un film da vivere in prima persona.",
    image: americheCaraibiImg,
    imageLeft: true,
    delay: 160,
    linkTo: "/destinazioni/americhe-caraibi",
  },
  {
    title: "Africa",
    subtitle: "Emozioni senza confini",
    text: "Safari tra i grandi parchi, deserti dorati e isole tropicali: l’Africa è il continente delle emozioni pure, dei tramonti infuocati e dei cieli stellati che non si dimenticano.",
    image: africaImg,
    imageLeft: false,
    delay: 240,
    linkTo: "/destinazioni/africa",
  },
  {
    title: "Asia",
    subtitle: "Tra tradizione e modernità",
    text: "Templi antichi, metropoli futuristiche, spiagge nascoste e sapori incredibili: dall’Estremo Oriente al Sud-Est asiatico, ogni viaggio è un incontro tra tradizione e modernità.",
    image: asiaImg,
    imageLeft: true,
    delay: 320,
    linkTo: "/destinazioni/asia",
  },
  {
    title: "Oceania",
    subtitle: "Orizzonti lontani",
    text: "Australia, Nuova Zelanda e paradisi del Pacifico: natura incontaminata, oceani cristallini e città vivaci. Perfetta per chi sogna grandi spazi e orizzonti infiniti.",
    image: oceaniaImg,
    imageLeft: false,
    delay: 400,
    linkTo: "/destinazioni/oceania",
  },
];

const DestinationsSection = () => {
  return (
    <>
      {destinations.map((dest) => (
        <DestinationSplit
          key={dest.title}
          title={dest.title}
          subtitle={dest.subtitle}
          text={dest.text}
          image={dest.image}
          imageLeft={dest.imageLeft}
          delay={dest.delay}
          linkTo={dest.linkTo}
        />
      ))}
    </>
  );
};

export default DestinationsSection;
