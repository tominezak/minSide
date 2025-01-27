import React from "react";
import Bilde from "../images/Bilde.jpg";
import Portrett from "../images/Portrett.jpeg";
import Nurse from "../images/Nurse.png";
import Pointer from "../images/Pointer.png";
import Programmer from "../images/programmer.png";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";

const Home: React.FC = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = targetId ? document.getElementById(targetId) : null;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="shadow-md flex-1 bg-black">
        {/* Content Section */}
        <div className="pt-20 px-10">
          {/* Name Section */}
          <h1 className="text-white text-4xl font-bold text-center mb-10 mt-20">
            Tomine Garborg Zakariassen
          </h1>

          {/* Row with Flex, sentrering av tekst og bilde */}
          <div className="flex items-center justify-center">
            {/* Left Side - Text */}
            <div className="text-white text-lg w-1/2 text-center">
              <h2 className="font-bold text-2xl mb-4">
                Velkommen til min side!
              </h2>
              <p>
                Her kan du lære mer om meg, mine prosjekter, og min erfaring.
                Takk for at du besøker!
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="w-1/2 flex justify-center">
              <img
                src={Portrett}
                alt="Bilde av meg selv"
                className="h-96 w-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* "Les mer" Button */}
        <div className="text-center mt-10">
          <a
            href="#merOmMeg"
            onClick={handleSmoothScroll}
            className="text-white text-lg font-bold hover:underline"
          >
            Les mer
          </a>
        </div>

        {/* Section for "Mer Om Meg" */}
        <div
          id="merOmMeg"
          className="mt-96 h-screen bg-white flex flex-col items-center justify-center"
        >
          {/* Innhold med tekst og ikon */}
          <div className="text-container text-black px-10 py-12 relative z-10 bg-transparent border-8 border-solid border-black rounded-lg shadow-lg text-center mb-8">
            <p>
              Jeg er en 25 år gammel jente som går andre året på bachelor i
              dataingeniør på OsloMet. Fra tidligere har jeg en bachelor i
              sykepleie. Gjennom ingeniørstudiet har jeg opparbeidet meg et
              solid grunnlag innen programmering og teknologi. Jeg ser nå etter
              en spennende og innovativ sommerjobb som kan gi meg verdifull
              erfaring videre.
              <br />
              <br />
              Jeg har en genuin interesse for fagområdet data og programmering,
              og jeg er veldig motivert til å lære mer. I løpet av studie til nå
              har jeg jobbet med flere spennende prosjekter, og arbeidet med
              ulike programmeringsspråk. Jeg har også erfaring med å jobbe i
              team, og trives godt med dette. Disse erfaringene har bidratt til
              at jeg har utviklet gode samarbeidsevner.
              <br />
              <br />
              Fra min tidligere bachelor tar jeg med meg kunnskap og ferdigheter
              innenfor problemløsning, kommunikasjon, arbeid med mennesker og
              samarbeid. Jeg tror dette vil være verdifullt i en stilling hos
              dere. Arbeidserfaring fra butikk har gitt meg erfaringer rundt
              service, salg, samarbeid, kommunikasjon med kunder og forstå deres
              behov.
            </p>
          </div>

          {/* Ikoner under tekst */}
          <section className="flex justify-center mt-16">
            <img
              src={Nurse}
              alt="Icon av en sykepleier"
              className="h-32 w-32 object-cover rounded-full shadow-lg"
            />
            <img
              src={Pointer}
              alt="Icon av en pil som peker mot høyre"
              className="mx-20 h-32 w-32 object-cover rounded-full shadow-lg"
            />
            <img
              src={Programmer}
              alt="Icon av en programmerer"
              className="h-32 w-32 object-cover rounded-full shadow-lg"
            />
          </section>
        </div>

        <section className="flex-container flex justify-center items-center m-8 mx-20">
          <div className="text-box w-3/5 mr-8">
            <h1 className="font-semibold text-2xl mr-6 text-white">
              Litt kort info om meg
            </h1>
            <p className="text-white">Noe mer her!</p>
          </div>
          <div className="img-box mx-auto w-2/5 m-20">
            <img
              src={Bilde}
              alt="En beskrivende tekst for bildet"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
