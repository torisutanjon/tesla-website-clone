import { MenuContext } from "../contexts/MenuContext";
import { useContext } from "react";

const useMenuContext = () => {
  const {
    isOpen,
    setIsOpen,
    currentMenu,
    setCurrentMenu,
    currentTitle,
    setCurrentTitle,
  } = useContext(MenuContext);
  return {
    isOpen,
    setIsOpen,
    currentMenu,
    setCurrentMenu,
    currentTitle,
    setCurrentTitle,
  };
};

export default useMenuContext;
