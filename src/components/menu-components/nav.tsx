import { useMenuContext } from "../../hooks";
import { arrowLeft, close } from "../../assets";

const Nav = ({ menu, title }: { menu: JSX.Element; title: string }) => {
  const { currentTitle, setIsOpen, setCurrentMenu, setCurrentTitle } =
    useMenuContext();
  const changeMenuHandler = () => {
    setCurrentMenu(menu);
    setCurrentTitle(title === "" ? "" : title);
  };
  return (
    <div
      className={`fixed h-16 w-full flex flex-row items-center px-6 bg-white z-10 ${
        currentTitle === "" ? "justify-end" : "justify-between"
      }`}
    >
      {currentTitle !== "" && (
        <>
          <button
            type="button"
            className="h-4 w-4 flex items-center justify-center"
            onClick={() => changeMenuHandler()}
          >
            <img src={arrowLeft} alt="" className="relative h-full w-full" />
          </button>
          <p className="text-md font-bold text-black/60">{currentTitle}</p>
        </>
      )}
      <button
        type="button"
        className="h-4 w-4 flex items-center justify-center"
        onClick={() => setIsOpen(false)}
      >
        <img src={close} alt="" className="relative h-full w-full" />
      </button>
    </div>
  );
};

export default Nav;
