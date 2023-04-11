import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

//assets
import close_icon from "../assets/images/cross-icon.png";
import left_arrow from "../assets/images/left-arrow.jpg";
import globe_icon from "../assets/images/globe-icon.jpg";
import down_arrow from "../assets/images/moving-down-arrow.gif";
import modely from "../assets/images/modely.jpg";

interface SectionInfo {
  name?: String;
  title?: JSX.IntrinsicElements["p"] | JSX.IntrinsicElements["a"];
  button1?: JSX.IntrinsicElements["button"];
  button2?: JSX.IntrinsicElements["button"];
  button3?: JSX.IntrinsicElements["img"];
}

const Home = () => {
  const isDesktopView = useMediaQuery({ query: "(min-width: 640px)" });
  const [hiddenDiv, setHiddenDiv] = useState({
    width: "0",
    display: "none",
  });
  const [viewMore, setViewMore] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sectionInfo, setSectionInfo] = useState<SectionInfo>({
    name: "",
    title: undefined,
    button1: undefined,
    button2: undefined,
    button3: undefined,
  });

  const [showAnimate, setShowAnimate] = useState(false);

  const sectionInfoArray = [
    {
      name: "Model Y",
      title: (
        <a href="#" className="text-black underline">
          View Inventory
        </a>
      ),
      button1: (
        <button className="relative h-[40px] w-full bg-black/50 rounded-[5px] font-medium mb-[10px] sm:w-[45%]">
          Order Now
        </button>
      ),
      button2: (
        <button className="relative h-[40px] w-full bg-white/50 rounded-[5px] text-black font-medium mb-[10px] sm:w-[45%]">
          Demo Drive
        </button>
      ),
      button3: (
        <img
          src={down_arrow}
          alt=""
          className="relative h-[20px] w-[25px] mb-[10px] cursor-pointer"
          onClick={() => setCurrentIndex(1)}
        />
      ),
    },
    {
      name: "Model 3",
      title: <p className="text-black">Leasing starting at $349/mo</p>,
      button1: (
        <button className="relative h-[40px] w-full bg-black/50 rounded-[5px] font-medium mb-[10px] sm:w-[45%]">
          Order Now
        </button>
      ),
      button2: (
        <button className="relative h-[40px] w-full bg-white/50 rounded-[5px] text-black font-medium mb-[10px] sm:w-[45%]">
          Demo Drive
        </button>
      ),
    },
    {
      name: "Model S",
      title: (
        <a href="#" className="text-black underline">
          View Inventory
        </a>
      ),
      button1: (
        <button className="relative h-[40px] w-full bg-black/50 rounded-[5px] font-medium mb-[10px] sm:w-[45%]">
          Order Now
        </button>
      ),
      button2: (
        <button className="relative h-[40px] w-full bg-white/50 rounded-[5px] text-black font-medium mb-[10px] sm:w-[45%]">
          Demo Drive
        </button>
      ),
    },
    {
      name: "Model X",
      title: (
        <a href="#" className="text-black underline">
          View Inventory
        </a>
      ),
      button1: (
        <button className="relative h-[40px] w-full bg-black/50 rounded-[5px] font-medium mb-[10px] sm:w-[45%]">
          Order Now
        </button>
      ),
      button2: (
        <button className="relative h-[40px] w-full bg-white/50 rounded-[5px] text-black font-medium mb-[10px] sm:w-[45%]">
          Demo Drive
        </button>
      ),
    },
    {
      name: "Solar Panels",
      title: <p className="text-black">Lowest Cost Solar Panels in America</p>,
      button1: (
        <button className="relative h-[40px] w-full bg-black/50 rounded-[5px] font-medium mb-[10px] sm:w-[45%]">
          Order Now
        </button>
      ),
      button2: (
        <button className="relative h-[40px] w-full bg-white/50 rounded-[5px] text-black font-medium mb-[10px] sm:w-[45%]">
          Learn More
        </button>
      ),
    },
    {
      name: "Solar Roof",
      title: <p className="text-black">Produce Clean Energy From Your Roof</p>,
      button1: (
        <button className="relative h-[40px] w-full bg-black/50 rounded-[5px] font-medium mb-[10px] sm:w-[45%]">
          Order Now
        </button>
      ),
      button2: (
        <button className="relative h-[40px] w-full bg-white/50 rounded-[5px] text-black font-medium mb-[10px] sm:w-[45%]">
          Learn More
        </button>
      ),
    },
    {
      name: "Accessories",
      button1: (
        <button className="relative h-[40px] w-full bg-black/75 rounded-[5px] font-medium mb-[10px] sm:w-[45%]">
          Shop Now
        </button>
      ),
    },
  ];

  const hiddenDivHandler = () => {
    if (hiddenDiv.width === "0") {
      document.getElementById("hiddenDiv")?.classList.remove("fadeout");
      document.getElementById("hiddenDiv")?.classList.add("fadein");
      setHiddenDiv({
        width: "350px",
        display: "block",
      });
    } else {
      document.getElementById("hiddenDiv")?.classList.remove("fadein");
      document.getElementById("hiddenDiv")?.classList.add("fadeout");
      setHiddenDiv({
        width: "0",
        display: "none",
      });
    }
    setViewMore(false);
  };

  const touchStartHandler = (event: any) => {
    setStartY(event.touches[0].clientY);
  };

  const touchEndHandler = (event: any) => {
    // console.log(event.changedTouches[0].clientY - startY);

    const elements = document.querySelectorAll("section");
    if (event.changedTouches[0].clientY - startY < 0) {
      if (currentIndex < elements.length - 1) {
        return setCurrentIndex(currentIndex + 1);
      }
      return setCurrentIndex(elements.length - 1);
    }

    if (event.changedTouches[0].clientY - startY > 0) {
      if (currentIndex > 0) {
        return setCurrentIndex(currentIndex - 1);
      }
      return setCurrentIndex(0);
    }
  };

  const wheelEventhandler = (event: any) => {
    const sections = document.querySelectorAll("section");
    if (event.deltaY < 0) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }

      if (currentIndex === 0) {
        setCurrentIndex(0);
      }
    }

    if (event.deltaY > 0) {
      if (currentIndex < sections.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }

      if (currentIndex === sections.length - 1) {
        setCurrentIndex(sections.length - 1);
      }
    }
  };

  useEffect(() => {
    document.title = "Electric Cars, Solar and Clean Energy | Tesla";
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("section");
    elements[currentIndex].scrollIntoView(true);
    setSectionInfo({
      name: sectionInfoArray[currentIndex].name,
      title: sectionInfoArray[currentIndex].title,
      button1: sectionInfoArray[currentIndex].button1,
      button2: sectionInfoArray[currentIndex].button2,
      button3: sectionInfoArray[currentIndex].button3,
    });
    setShowAnimate(true);
    setTimeout(() => setShowAnimate(false), 1000);
  }, [currentIndex]);

  return (
    <div className="absolute top-0 left-0 h-full w-full">
      {/* hidden div */}
      <div
        className="fixed top-0 left-0 h-screen w-screen bg-black/25 z-[2] transitionDesign"
        style={{ display: hiddenDiv.display }}
      ></div>
      <div
        className="fixed top-0 right-0 h-full bg-white z-[3] transitionDesign text-black/75 font-medium"
        id="hiddenDiv"
        style={{ width: hiddenDiv.width }}
      >
        <div className="relative h-full w-full flex flex-col items-start justify-start">
          <div className="relative h-[10vh] w-full flex items-center justify-end">
            {viewMore === true && (
              <button
                className="absolute left-[5%]"
                onClick={() => setViewMore(false)}
              >
                {"<"} Back
              </button>
            )}
            <img
              src={close_icon}
              alt=""
              className="relative h-[15px] w-[15px] mr-[10%] cursor-pointer"
              onClick={() => hiddenDivHandler()}
            />
          </div>
          <div className="relative h-full w-full overflow-y-auto">
            <div className="relative h-[180vh] w-full flex flex-col items-start justify-start sm:h-full">
              {isDesktopView ? (
                <>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Existing Inventory</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Used Inventory</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Trade-In</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Demo Drive</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Insurance</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Cybertruck</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Raodster</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Semi</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Charging</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Commercial Energy</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Utilitis</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Find Us</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Support</p>
                  </div>
                  <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                    <p className="p-0 m-0">Investor Relations</p>
                  </div>
                </>
              ) : (
                <>
                  {viewMore === false ? (
                    <>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Model S</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Model 3</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Model X</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Model Y</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Solar Roof</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Solar Panels</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Powerwall</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Existing Inventory</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Used Inventory</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Trade-In</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Demo Drive</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Insurance</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Commercial Energy</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Utilities</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Charging</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Find Us</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Support</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Investor Relations</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Shop</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Account</p>
                      </div>
                      <div
                        className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-between"
                        onClick={() => setViewMore(true)}
                      >
                        <p className="p-0 m-0">More</p>
                        <img
                          src={left_arrow}
                          alt=""
                          className="relative h-[15px] w-[20px] mr-[10%]"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Cybertruck</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Roadster</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">Semi</p>
                      </div>
                      <div className="relative h-[50px] w-[90%] mx-[5%] flex items-center justify-start">
                        <p className="p-0 m-0">News</p>
                      </div>
                    </>
                  )}
                </>
              )}
              <div className="relative h-[65px] w-[90%] mx-[5%] flex flex-row">
                <div className="relative h-full w-[10%] flex items-start justify-start">
                  <img
                    src={globe_icon}
                    alt=""
                    className="relative h-[25px] w-[25px] mt-[25%] sm:mt-[15%]"
                  />
                </div>
                <div className="relative h-full w-[85%] flex flex-col items-start justify-evenly">
                  <p className="font-bold">United State</p>
                  <p className="text-[14px]">English</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="fixed h-[15vh] w-full z-[1] sm:h-[10vh]">
        <div className="relative h-1/2 w-full bg-white flex flex-row items-center justify-center">
          <p className="mx-[5%] text-black/75 text-[12px] sm:text-[16px]">
            Update — $7,500 tax credit is anticipated to be reduced for Model 3
            on April 18. Take delivery now. &nbsp;
            <a href="#" className="underline">
              Learn More
            </a>
          </p>
        </div>
        <div className="relative h-1/2 w-[95%] mx-[2.5%] bg-transparent flex flex-row items-center justify-between px-[25px] text-black/75 font-medium">
          <a href="/" className="teslaLarge tracking-[10px] text-[20px]">
            TESLA
          </a>
          {isDesktopView && (
            <div className="relative h-full w-[40%] flex flex-row items-center justify-between">
              <a href="#">Model S</a>
              <a href="#">Model 3</a>
              <a href="#">Model X</a>
              <a href="#">Model Y</a>
              <a href="#">Solar Roof</a>
              <a href="#">Solar Panels</a>
              <a href="#">Powerwall</a>
            </div>
          )}
          {isDesktopView ? (
            <>
              <div className="relative h-full w-[10%] flex flex-row items-center justify-between">
                <button>Shop</button>
                <button>Account</button>
                <button onClick={() => hiddenDivHandler()}>Menu</button>
              </div>
            </>
          ) : (
            <>
              <button onClick={() => hiddenDivHandler()}>Menu</button>
            </>
          )}
        </div>
      </header>

      <main className="relative h-full w-full overflow-hidden sm:scroll-smooth">
        <section className="relative h-full w-full modely-bg"></section>
        <section className="relative h-full w-full model3-bg"></section>
        <section className="relative h-full w-full models-bg"></section>
        <section className="relative h-full w-full modelx-bg"></section>
        <section className="relative h-full w-full solarpanel-bg"></section>
        <section className="relative h-full w-full solarroof-bg"></section>
        <section className="relative h-full w-full bg-white accessories-bg"></section>
      </main>

      <div
        className={`${
          showAnimate === true ? "sectionFade" : ""
        } fixed top-[25vh] h-[70vh] w-screen flex flex-col items-center justify-between sm:top-[20vh] sm:h-[75vh]`}
        onWheel={wheelEventhandler}
        onTouchStart={touchStartHandler}
        onTouchEnd={touchEndHandler}
      >
        <div>
          <>
            <p className="text-[42px] text-black font-medium">
              {sectionInfo?.name}
            </p>
            {sectionInfo?.title}
          </>
        </div>
        <div className="relative h-[150px] w-[90%] flex flex-col items-center justify-end sm:w-[30%]">
          <>
            <div className="relative h-[75%] w-full flex flex-col justify-end sm:h-[50%] sm:flex-row sm:items-center sm:justify-evenly">
              <>
                {sectionInfo.button1}
                {sectionInfo.button2}
              </>
            </div>
            {sectionInfo.button3}
          </>
        </div>
      </div>

      <footer className="fixed bottom-0 h-[5vh] w-full bg-white flex items-center justify-center z-[1]">
        <div className="relative h-full w-[95%] flex flex-row items-center justify-between text-[10px] text-black/75 sm:w-[30%] sm:text-[12px]">
          <a href="#">Tesla © 2023</a>
          <a href="#">Privacy & Legal</a>
          <a href="#">Vehicle Recalls</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
          <a href="#">News</a>
          <a href="#">Engage</a>
          <a href="#">Locations</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
