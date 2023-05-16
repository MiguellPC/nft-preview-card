import { Attribution } from "./components/Attribution";
import { Creator } from "./components/Creator";
import { Line } from "./components/Line";
import { Picture } from "./components/Picture";
import { Presentation } from "./components/Presentation";

import equilibriumImage from "../images/image-equilibrium.jpg";
import view from "../images/icon-view.svg";
import avatar from "../images/image-avatar.png";

function App() {
  const equilibriumCard = {
    imageSrc: equilibriumImage,
    alt: "Equilibrium image",
    viewSrc: view,
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    ethValue: "0.041",
    daysLeft: "3",
    creatorImg: avatar,
    creatorImgAlt: "Jules Wyvern picture",
    creatorName: "Jules Wyvern",
  };

  return (
    <>
      <main className="bg-card-bg rounded-xl w-[350px] p-6 flex justify-center items-center flex-col relative mb-10 shadow-2xl">
        <Picture
          imageSrc={equilibriumCard.imageSrc}
          alt={equilibriumCard.alt}
          viewSrc={equilibriumCard.viewSrc}
        />
        <Presentation
          title={equilibriumCard.title}
          description={equilibriumCard.description}
          ethValue={equilibriumCard.ethValue}
          daysLeft={equilibriumCard.daysLeft}
        />
        <Line />
        <Creator
          avatar={equilibriumCard.creatorImg}
          creatorImgAlt={equilibriumCard.creatorImgAlt}
          creatorName={equilibriumCard.creatorName}
        />
      </main>
      <Attribution />
    </>
  );
}

export default App;
