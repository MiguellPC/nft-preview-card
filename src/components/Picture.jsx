import equilibrium from "../../images/image-equilibrium.jpg";
import view from "../../images/icon-view.svg";

export const Picture = () => {
  return (
    <>
      <div className="relative bg-cover bg-no-repeat group/view cursor-pointer">
        <img
          src={equilibrium}
          alt="Equilibrium image"
          className="w-[300px] rounded-md shadow-sm shadow-line"
        />
        <div className="absolute bottom-0 top-0 right-0 left-0 h-full w-full bg-letter-cyan rounded-md opacity-0 transition duration-300 ease-in-out group-hover/view:opacity-40"></div>
        <img
          src={view}
          alt="View icon"
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover/view:opacity-100 transition duration-300 ease-in-out"
        />
      </div>
    </>
  );
};
