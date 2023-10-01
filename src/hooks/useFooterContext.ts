import { useContext } from "react";
import { FooterContext } from "../contexts/FooterContext.tsx";

const useFooterContext = () => {
  const { isVisible, setIsVisible } = useContext(FooterContext);
  return { isVisible, setIsVisible };
};

export default useFooterContext;
