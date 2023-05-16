export const Picture = (props) => {
  return (
    <>
      <div className="relative bg-cover bg-no-repeat group/view cursor-pointer">
        <img
          src={props.imageSrc}
          alt={props.alt}
          className="w-[300px] rounded-md shadow-sm shadow-line"
        />
        <div className="absolute bottom-0 top-0 right-0 left-0 h-full w-full bg-letter-cyan rounded-md opacity-0 transition duration-300 ease-in-out group-hover/view:opacity-40"></div>
        <img
          src={props.viewSrc}
          alt="View icon"
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover/view:opacity-100 transition duration-300 ease-in-out"
        />
      </div>
    </>
  );
};
