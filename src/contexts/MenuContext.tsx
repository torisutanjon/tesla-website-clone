import { createContext, useState, Dispatch } from "react";
import { DefaultMenu } from "../components/menu-components";

interface ContextTypes {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  currentMenu: JSX.Element;
  setCurrentMenu: Dispatch<React.SetStateAction<JSX.Element>>;
  currentTitle: string;
  setCurrentTitle: Dispatch<React.SetStateAction<string>>;
}

export const MenuContext = createContext<ContextTypes>({
  isOpen: false,
  setIsOpen: () => {},
  currentMenu: <></>,
  setCurrentMenu: () => {},
  currentTitle: "",
  setCurrentTitle: () => {},
});

const MenuContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(<DefaultMenu />);
  const [currentTitle, setCurrentTitle] = useState("");

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setIsOpen,
        currentMenu,
        setCurrentMenu,
        currentTitle,
        setCurrentTitle,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
