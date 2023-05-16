import ethereum from "../../images/icon-ethereum.svg";
import clock from "../../images/icon-clock.svg";

export const Presentation = (props) => {
  return (
    <>
      <div className="text-letter-primary my-4">
        <h1 className="text-letter-white text-[22px] font-semibold my-4 hover:text-letter-cyan cursor-pointer">
          {props.title}
        </h1>

        <p className="my-4 font-light text-lg">{props.description}</p>

        <section className="flex justify-between">
          <div className="flex justify-center items-center gap-2 text-letter-cyan font-normal">
            <img src={ethereum} alt="Ethereum icon" />
            {props.ethValue} ETH
          </div>
          <div className="flex justify-center items-center gap-2 font-light text-sm">
            <img src={clock} alt="Clock icon" />
            {props.daysLeft} days left
          </div>
        </section>
      </div>
    </>
  );
};
