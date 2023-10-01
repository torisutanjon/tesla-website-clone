import { useFillerContext, useRefObserver, useTopNavContext } from "../hooks";
import { useEffect } from "react";

const ModelY = () => {
  const { setData } = useFillerContext();
  const { isVisible, observeRef } = useRefObserver();
  const { setColor } = useTopNavContext();

  useEffect(() => {
    if (isVisible) {
      setData({
        title: "Model Y",
        headerOne: "From $39,390",
        headerTwo: "After Federal Tax Credit & Est. Gas Savings",
        buttonOneText: "Order Now",
        buttonTwoText: "Demo Drive",
        footer:
          "*Price before incentives and savings is $50,490, excluding taxes and fees. Subject to change",
        link: "Learn about est. gas savings.",
        textColor: "text-white/75",
      });
      setColor("text-white");
    }
  }, [isVisible, setData, setColor]);

  return (
    <div className="relative h-full w-full flex items-center justify-center modely_bg snap-end">
      <div className="relative h-10 w-10" ref={observeRef}></div>
    </div>
  );
};

export default ModelY;
