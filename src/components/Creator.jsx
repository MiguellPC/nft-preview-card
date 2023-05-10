import avatar from "../../images/image-avatar.png";

export const Creator = () => {
  return (
    <>
      <footer className="w-full flex justify-start items-center gap-4 text-letter-primary">
        <img
          src={avatar}
          alt="Jules Wyvern picture"
          className="w-[30px] border rounded-full border-letter-white"
        />
        <p>
          Creation of{" "}
          <span className="text-letter-white hover:text-letter-cyan cursor-pointer">
            Jules Wyvern
          </span>
        </p>
      </footer>
    </>
  );
};
