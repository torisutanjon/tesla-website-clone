import { useFillerContext, useRefObserver, useTopNavContext } from "../hooks";
import { useEffect } from "react";
import { experienceVideo, experiencePoster } from "../assets";

const ExperienceTesla = () => {
  const { setData } = useFillerContext();
  const { isVisible, observeRef } = useRefObserver();
  const { setColor } = useTopNavContext();

  useEffect(() => {
    if (isVisible) {
      setData({
        title: "Experience Tesla",
        headerOne: "Schedule a Demo Drive Today",
        headerTwo: "",
        buttonOneText: "",
        buttonTwoText: "Demo Drive",
        footer: "",
        link: "",
        textColor: "text-white/75",
      });
      setColor("text-white");
    }
  }, [isVisible, setData, setColor]);
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center snap-end">
      <div className="absolute h-full w-full bg-black/25 z-10"></div>
      <video
        autoPlay
        loop
        muted
        poster={experiencePoster}
        className="relative h-full w-full object-cover"
      >
        <source
          src={experienceVideo}
          // src="https://drive.google.com/uc?export=download&id=1faAdhnmJPsm9pXIxNlUhUQIEtBHs5YtX"
          type="video/mp4"
        />
        Your browser cannot support video.
      </video>
      <div
        className="absolute top-1/2 left-1/2 h-10 w-10"
        ref={observeRef}
      ></div>
    </div>
  );
};

export default ExperienceTesla;
