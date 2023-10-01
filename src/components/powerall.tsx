import { useFillerContext, useRefObserver, useTopNavContext } from "../hooks";
import { useEffect } from "react";

const PowerWall = () => {
  const { setData } = useFillerContext();
  const { isVisible, observeRef } = useRefObserver();
  const { setColor } = useTopNavContext();

  useEffect(() => {
    if (isVisible) {
      setData({
        title: "Powerwall",
        headerOne: "",
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
    <div className="relative h-full w-full flex items-center justify-center powerwall snap-end">
      <div className="relative h-10 w-10" ref={observeRef}></div>
    </div>
  );
};

export default PowerWall;
