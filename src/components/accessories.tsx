import { useRefObserver, useFillerContext, useTopNavContext } from "../hooks";
import { useEffect } from "react";

const Accessories = () => {
  const { isVisible, observeRef } = useRefObserver();
  const { setData } = useFillerContext();
  const { setColor } = useTopNavContext();

  useEffect(() => {
    if (isVisible) {
      setData({
        title: "Accessories",
        headerOne: "",
        headerTwo: "",
        buttonOneText: "Shop Now",
        buttonTwoText: "",
        footer: "",
        link: "",
        textColor: "text-white/75",
      });
      setColor("text-white");
    }
    return;
  }, [isVisible, observeRef, setData, setColor]);
  return (
    <div className="relative h-full w-full flex items-center justify-center accessories_bg snap-end">
      <div className="relative h-10 w-10" ref={observeRef}></div>
      <div className="absolute bottom-6 hidden w-1/2  flex-row items-center justify-center text-[0.8rem] text-white/75 font-bold lg:flex">
        <p className="mx-2">Tesla &copy; 2023</p>
        <a href="#" className="mx-2">
          Privacy & Legal
        </a>
        <a href="#" className="mx-2">
          Vehicle Recalls
        </a>
        <a href="#" className="mx-2">
          Contact
        </a>
        <a href="#" className="mx-2">
          News
        </a>
        <a href="#" className="mx-2">
          Get Updates
        </a>
        <a href="#" className="mx-2">
          Locations
        </a>
      </div>
    </div>
  );
};

export default Accessories;
