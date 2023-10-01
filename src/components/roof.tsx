import { useFillerContext, useRefObserver, useTopNavContext } from "../hooks";
import { useEffect } from "react";

const SolarRoof = () => {
  const { setData } = useFillerContext();
  const { isVisible, observeRef } = useRefObserver();
  const { setColor } = useTopNavContext();

  useEffect(() => {
    if (isVisible) {
      setData({
        title: "Solar Roof",
        headerOne: "Product Clean Energy From Your Roof",
        headerTwo: "",
        buttonOneText: "Order Now",
        buttonTwoText: "Learn More",
        footer: "",
        link: "",
        textColor: "text-black/75",
      });
      setColor("text-black");
    }
  }, [isVisible, setData, setColor]);

  return (
    <div className="relative h-full w-full flex items-center justify-center roof_bg snap-end">
      <div className="relative h-10 w-10" ref={observeRef}></div>
    </div>
  );
};

export default SolarRoof;
