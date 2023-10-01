import { useRefObserver, useFooterContext } from "../hooks";
import { useEffect } from "react";

const Footer = () => {
  const { setIsVisible } = useFooterContext();
  const { isVisible, observeRef } = useRefObserver();

  useEffect(() => {
    if (isVisible) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isVisible, setIsVisible]);

  return (
    <div className="relative h-40 w-full bg-black snap-end flex flex-col items-center justify-evenly py-4 text-white/75 text-sm font-medium lg:hidden">
      <div className="absolute -mt-12 h-8 w-8" ref={observeRef}></div>
      <p>Tesla &copy; 2023</p>
      <p>Privacy & Legal</p>
      <p>Vehicle Recalls</p>
      <p>News</p>
    </div>
  );
};

export default Footer;
