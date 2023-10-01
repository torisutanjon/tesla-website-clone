import { useMenuContext } from "../hooks";
const Menu = () => {
  const { isOpen, currentMenu } = useMenuContext();

  return (
    <div
      className={`fixed h-full w-full bg-white duration-500 overflow-y-auto pb-10 lg:hidden ${
        isOpen ? "opacity-100 z-40 " : "opacity-0"
      }`}
    >
      {currentMenu}
    </div>
  );
};

export default Menu;
