import { useFillerContext, useRefObserver, useTopNavContext } from "../hooks";
import { useEffect } from "react";

const SolarPanels = () => {
  const { setData } = useFillerContext();
  const { isVisible, observeRef } = useRefObserver();
  const { setColor } = useTopNavContext();

  useEffect(() => {
    if (isVisible) {
      setData({
        title: "Solar Panels",
        headerOne: "Schedule a Virtual Consultation",
        headerTwo: "",
        buttonOneText: "Order Now",
        buttonTwoText: "Learn More",
        footer: "",
        link: "",
        textColor: "text-white/75",
      });
      setColor("text-white");
    }
  }, [isVisible, setData, setColor]);
  return (
    <div className="relative h-full w-full flex items-center justify-center panel_bg snap-end">
      <div className="relative h-10 w-10" ref={observeRef}></div>
    </div>
  );
};

export default SolarPanels;
