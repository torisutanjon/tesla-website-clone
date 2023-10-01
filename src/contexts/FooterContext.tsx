import { createContext, useState, Dispatch } from "react";

interface ContextTypes {
  isVisible: boolean;
  setIsVisible: Dispatch<React.SetStateAction<boolean>>;
}

export const FooterContext = createContext<ContextTypes>({
  isVisible: false,
  setIsVisible: () => {},
});

const FooterContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <FooterContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </FooterContext.Provider>
  );
};

export default FooterContextProvider;
