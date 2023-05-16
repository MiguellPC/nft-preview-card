export const Creator = (props) => {
  return (
    <>
      <footer className="w-full flex justify-start items-center gap-4 text-letter-primary">
        <img
          src={props.avatar}
          alt={props.creatorImgAlt}
          className="w-[30px] border rounded-full border-letter-white"
        />
        <p>
          Creation of{" "}
          <span className="text-letter-white hover:text-letter-cyan cursor-pointer">
            {props.creatorName}
          </span>
        </p>
      </footer>
    </>
  );
};
