import DestinationSplit from "./DestinationSplit.jsx";

const destinations = [
  {
    title: "Europa",
    subtitle: "Storie di viaggi",
    text: "Un viaggio nelle capitali più antiche del mondo e nelle città che hanno segnato la nostra storia. Dalle città d’arte alle coste del Mediterraneo, è il luogo perfetto per chi vuole scoprire cultura, sapori e panorami unici.",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
    imageLeft: false,
    delay: 80,
    linkTo: "/destinazioni/europa",
  },
  {
    title: "Americhe e Caraibi",
    subtitle: "Storie di viaggi",
    text: "USA, Canada, Messico, Cuba e le isole caraibiche: tra grandi città, strade infinite e spiagge da sogno. Dai parchi americani ai grattacieli, ogni viaggio è un film da vivere in prima persona.",
    image: "https://images.pexels.com/photos/208738/pexels-photo-208738.jpeg",
    imageLeft: true,
    delay: 160,
    linkTo: "/destinazioni/americhe-caraibi",
  },
  {
    title: "Africa",
    subtitle: "Storie di viaggi",
    text: "Safari tra i grandi parchi, deserti dorati e isole tropicali: l’Africa è il continente delle emozioni pure, dei tramonti infuocati e dei cieli stellati che non si dimenticano.",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    imageLeft: false,
    delay: 240,
    linkTo: "/destinazioni/africa",
  },
  {
    title: "Asia",
    subtitle: "Storie di viaggi",
    text: "Templi antichi, metropoli futuristiche, spiagge nascoste e sapori incredibili: dall’Estremo Oriente al Sud-Est asiatico, ogni viaggio è un incontro tra tradizione e modernità.",
    image: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg",
    imageLeft: true,
    delay: 320,
    linkTo: "/destinazioni/asia",
  },
  {
    title: "Oceania",
    subtitle: "Storie di viaggi",
    text: "Australia, Nuova Zelanda e paradisi del Pacifico: natura incontaminata, oceani cristallini e città vivaci. Perfetta per chi sogna grandi spazi e orizzonti infiniti.",
    image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
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
