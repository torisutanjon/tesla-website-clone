import { useRefObserver, useFillerContext, useTopNavContext } from "../hooks";
import { useEffect } from "react";

const Model3 = () => {
  const { isVisible, observeRef } = useRefObserver();
  const { setData } = useFillerContext();
  const { setColor } = useTopNavContext();

  //if visible then call the useChangeFilterInfo with specific data
  useEffect(() => {
    if (isVisible) {
      setData({
        title: "Model 3",
        headerOne: "From $29,740",
        headerTwo: "After Federal Tax Credit & Est. Gas Savings",
        buttonOneText: "Order Now",
        buttonTwoText: "Demo Drive",
        footer:
          "*Price before incentives and savings is $40,240, excluding taxes and fees. Subject to change",
        link: "Learn about est. gas savings.",
        textColor: "text-white/75",
      });
      setColor("text-white");
    }
  }, [isVisible, observeRef, setData, setColor]);
  return (
    <div className="relative h-full flex items-center justify-center w-full model3_bg snap-end">
      <div className="relative h-10 w-10" ref={observeRef}></div>
    </div>
  );
};

export default Model3;
