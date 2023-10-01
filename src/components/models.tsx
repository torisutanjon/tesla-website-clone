import { useFillerContext, useRefObserver, useTopNavContext } from "../hooks";
import { useEffect } from "react";

const ModelS = () => {
  const { setData } = useFillerContext();
  const { isVisible, observeRef } = useRefObserver();
  const { setColor } = useTopNavContext();

  useEffect(() => {
    if (isVisible) {
      setData({
        title: "Model S",
        headerOne: "From $71,090",
        headerTwo: "After Est. Gas Savings",
        buttonOneText: "Order Now",
        buttonTwoText: "Demo Drive",
        footer:
          "*Price before incentives and savings is $74,990, excluding taxes and fees. Subject to change",
        link: "Learn about est. gas savings.",
        textColor: "text-black/75",
      });
      setColor("text-black");
    }
  }, [isVisible, setData, setColor]);
  return (
    <div className="relative h-full w-full flex items-center justify-center models_bg snap-end">
      <div className="relative h-10 w-10" ref={observeRef}></div>
    </div>
  );
};

export default ModelS;
