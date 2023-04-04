import React, { useEffect, useState, WheelEvent } from "react";
import { useMediaQuery } from "react-responsive";

//assets
import arrow_gif from "../assets/images/moving-down-arrow.gif";
import globe_icon from "../assets/images/globe-icon.jpg";
import left_arrow from "../assets/images/left-arrow.jpg";
import cross_icon from "../assets/images/cross-icon.png";

interface InfosType {
  paragraph1?: string | undefined;
  paragraph2?: JSX.IntrinsicElements["p"] | undefined;
  button1?: JSX.IntrinsicElements["button"] | undefined;
  button2?: JSX.IntrinsicElements["button"] | undefined;
  image?: JSX.IntrinsicElements["img"] | undefined;
}

const Home = () => {
  const [hiddenWidth, setHiddenWidth] = useState("0");
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [sectionInfos, setSectionInfos] = useState<InfosType>({
    paragraph1: "",
    paragraph2: undefined,
    button1: undefined,
    button2: undefined,
    image: undefined,
  });
  const [viewMore, setViewMore] = useState(false);

  const isDesktopView = useMediaQuery({ query: "(min-width: 640px)" });

  const sectionData = [
    {
      paragraph1: "Model 3",
      paragraph2: (
        <p className="text-black text-[18px]">Leasing starting at $349/mo</p>
      ),
      button1: (
        <button className="relative h-[40px] w-[425px] bg-black/75 text-white/75 mb-[15px] font-medium sm:w-[275px] rounded-[5px]">
          View Inventory
        </button>
      ),
      button2: (
        <button className="relative h-[40px] w-[425px] bg-white/75 text-black/75 mb-[15px] font-medium sm:w-[275px] rounded-[5px]">
          Custom Order
        </button>
      ),
      image: (
        <img
          src={arrow_gif}
          className="relative h-[20px] w-[25px] mb-[15px] cursor-pointer"
          alt=""
          onClick={() => setCurrentSectionIndex(1)}
        />
      ),
    },
    {
      paragraph1: "Model Y",
      paragraph2: (
        <p className="text-black text-[18px] underline">
          Schedule a Demo Drive
        </p>
      ),
      button1: (
        <button className="relative h-[40px] w-[425px] text-white/75 bg-black/75 mb-[15px] font-medium sm:w-[275px] rounded-[5px]">
          View Inventory
        </button>
      ),
      button2: (
        <button className="relative h-[40px] w-[425px] bg-white/75 text-black/75 mb-[50px] font-medium sm:w-[275px] rounded-[5px]">
          Custom Order
        </button>
      ),
    },
    {
      paragraph1: "Model S",
      paragraph2: (
        <p className="text-black text-[18px] underline">
          Schedule a Demo Drive
        </p>
      ),
      button1: (
        <button className="relative h-[40px] w-[425px] text-white/75 bg-black/75 mb-[15px] font-medium sm:w-[275px] rounded-[5px]">
          View Inventory
        </button>
      ),
      button2: (
        <button className="relative h-[40px] w-[425px] bg-white/75 text-black/75 mb-[50px] font-medium sm:w-[275px] rounded-[5px]">
          Custom Order
        </button>
      ),
    },
    {
      paragraph1: "Model X",
      paragraph2: (
        <p className="text-black text-[18px] underline">
          Schedule a Demo Drive
        </p>
      ),
      button1: (
        <button className="relative h-[40px] w-[425px] text-white/75 bg-black/75 mb-[15px] font-medium sm:w-[275px] rounded-[5px]">
          View Inventory
        </button>
      ),
      button2: (
        <button className="relative h-[40px] w-[425px] bg-white/75 text-black/75 mb-[50px] font-medium sm:w-[275px] rounded-[5px]">
          Custom Order
        </button>
      ),
    },
    {
      paragraph1: "Solar Panels",
      paragraph2: (
        <p className="text-black text-[18px]">
          Lowest Cost Solar Panels in America
        </p>
      ),
      button1: (
        <button className="relative h-[40px] w-[425px] text-white/75 bg-black/75 mb-[15px] font-medium sm:w-[275px] rounded-[5px]">
          Order Now
        </button>
      ),
      button2: (
        <button className="relative h-[40px] w-[425px] bg-white/75 text-black/75 mb-[50px] font-medium sm:w-[275px] rounded-[5px]">
          Learn More
        </button>
      ),
    },
    {
      paragraph1: "Solar Roof",
      paragraph2: (
        <p className="text-black text-[18px]">
          Produce Clean Energy From Your Roof
        </p>
      ),
      button1: (
        <button className="relative h-[40px] w-[425px] text-white/75 bg-black/75 mb-[15px] font-medium sm:w-[275px] rounded-[5px]">
          Order Now
        </button>
      ),
      button2: (
        <button className="relative h-[40px] w-[425px] bg-white/75 text-black/75 mb-[50px] font-medium sm:w-[275px] rounded-[5px]">
          Learn More
        </button>
      ),
    },
    {
      paragraph1: "Accessories",
      button1: (
        <button className="relative h-[40px] w-[425px] text-white/75 bg-black mb-[50px] font-medium sm:w-[275px] rounded-[5px]">
          Shop Now
        </button>
      ),
    },
  ];

  const hiddenDivHandler = () => {
    if (hiddenWidth === "0") return setHiddenWidth("350px");
    if (hiddenWidth === "350px") return setHiddenWidth("0");
  };

  const sectionScrollerHandler = (event: WheelEvent<HTMLDivElement>) => {
    const sections = document.querySelectorAll("section");

    if (event.deltaY < 0) {
      if (currentSectionIndex > 0) {
        setCurrentSectionIndex(currentSectionIndex - 1);
      }

      if (currentSectionIndex === 0) {
        setCurrentSectionIndex(0);
      }
    }

    if (event.deltaY > 0) {
      if (currentSectionIndex < sections.length - 1) {
        setCurrentSectionIndex(currentSectionIndex + 1);
      }

      if (currentSectionIndex === sections.length - 1) {
        setCurrentSectionIndex(sections.length - 1);
      }
    }
  };

  useEffect(() => {
    document.title = "Electric Cars, Solar and Clean Energy | Tesla";
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections[currentSectionIndex].scrollIntoView(true);

    console.log(sections.length);
    setSectionInfos({
      paragraph1: sectionData[currentSectionIndex].paragraph1,
      paragraph2: sectionData[currentSectionIndex].paragraph2,
      button1: sectionData[currentSectionIndex].button1,
      button2: sectionData[currentSectionIndex].button2,
      image: sectionData[currentSectionIndex].image,
    });
  }, [currentSectionIndex]);

  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex flex-col">
      <header className="fixed top-0 left-0 h-[15%] w-full flex flex-col z-[2]">
        <div className="relative h-[50%] w-full flex items-center justify-center  text-black/75 text-[12px] bg-white px-[25px]">
          <p className="p-0 m-0 text-[12px] tracking-[0.35px] sm:text-[14px]">
            Update - $7,500 tax credit is anticipated to be reduced for Model 3
            on April 18. Take delivery now. &nbsp;
            <a href="#" className=" text-black/75 font-normal underline">
              Learn More
            </a>
          </p>
        </div>
        <div className="relative h-[50%] w-full headerGrid px-[25px] font-medium">
          <a
            href="/"
            className="teslaLarge text-[16px] text-black tracking-[10px] font-bold self-center justify-self-start"
          >
            TESLA
          </a>
          {isDesktopView ? (
            <>
              <div className="relative h-full w-full flex flex-row items-center justify-evenly text-black">
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
                <a href="#">Powerwall</a>
              </div>
              <div className="relative h-full w-full flex flex-row items-center justify-evenly">
                <button
                  className="relative h-[35px] w-[65px] bg-[#0000000d] text-black sm:bg-transparent"
                  onClick={() => hiddenDivHandler()}
                >
                  Shop
                </button>
                <button
                  className="relative h-[35px] w-[65px] bg-[#0000000d] text-black sm:bg-transparent"
                  onClick={() => hiddenDivHandler()}
                >
                  Account
                </button>
                <button
                  className="relative h-[35px] w-[65px] bg-[#0000000d] text-black sm:bg-transparent"
                  onClick={() => hiddenDivHandler()}
                >
                  Menu
                </button>
              </div>
            </>
          ) : (
            <>
              {/* this div is just to fill the 40% grid  */}
              <div></div>
              <button
                className="relative h-[35px] w-[65px] bg-[#0000000d] text-black sm:bg-transparent self-center justify-self-center"
                onClick={() => hiddenDivHandler()}
              >
                Menu
              </button>
            </>
          )}
        </div>
      </header>

      {/* hidden div */}
      <div
        className="absolute top-0 right-0 h-full transitionDesign bg-white z-[3] overflow-y-auto"
        style={{ width: hiddenWidth }}
      >
        <div className="relative h-[100px] w-full flex items-center justify-end">
          {viewMore === true && (
            <button
              className="absolute left-[15px] h-[50px] w-[50px] outline-none border-none text-black/50"
              onClick={() => setViewMore(false)}
            >
              {"<"} Back
            </button>
          )}
          <img
            src={cross_icon}
            alt=""
            className="relative h-[15px] w-[15px] mr-[10%] cursor-pointer"
            onClick={() => hiddenDivHandler()}
          />
        </div>
        <div className="relative h-[1300px] w-full flex flex-col items-center justify-start">
          {viewMore === false ? (
            <>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Model S
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Model 3
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Model X
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Model Y
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Solar Roof
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Solar Panels
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Powerwall
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Existing Inventory
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Used Inventory
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Trade-In
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Demo Drive
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Insurance
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Commercial Energy
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Utilities
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Charging
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Find Us
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Support
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Investor Relations
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Shop
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Account
                </p>
              </div>
              <div
                className="relative h-[40px] w-[90%] flex items-center justify-between cursor-pointer"
                onClick={() => setViewMore(true)}
              >
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  More
                </p>
                <img
                  src={left_arrow}
                  alt=""
                  className="relative h-[15px] w-[25px] mr-[15%]"
                />
              </div>
            </>
          ) : (
            <>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Cybertruck
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Roadster
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  Semi
                </p>
              </div>
              <div className="relative h-[40px] w-[90%] flex items-center justify-start">
                <p className="text-black/75 font-medium text-[14px] ml-[10px]">
                  News
                </p>
              </div>
            </>
          )}

          <div className="relative h-[50px] w-[90%] flex flex-row items-start justify-start mt-[20px]">
            <div className="relative h-full w-[10%] ml-[10px]">
              <img
                src={globe_icon}
                alt=""
                className="relative h-[25px] w-[25px]"
              />
            </div>
            <div className="relative h-full w-[75%] flex flex-col items-start justify-evenly">
              <p className="text-black font-medium">United State</p>
              <p className="text-black text-[14px]">English</p>
            </div>
          </div>
          {!isDesktopView && (
            <div className="relative top-[100px] h-[150px] w-full flex flex-col items-center justify-between text-black/75">
              <a href="#">Tesla &copy; 2023</a>
              <a href="#">Privacy & Legal</a>
              <a href="#">Vehicle Recalls</a>
              <a href="#">Careers</a>
              <a href="#">News</a>
            </div>
          )}
        </div>
      </div>
      <main className="relative h-full w-full overflow-hidden scroll-smooth">
        <section className="relative h-full w-full p-0 m-0 model3 backgroundImage flex items-center justify-center"></section>
        <section className="relative h-full w-full p-0 m-0 modely backgroundImage flex items-center justify-center"></section>
        <section className="relative h-full w-full p-0 m-0 models backgroundImage flex items-center justify-center"></section>
        <section className="relative h-full w-full p-0 m-0 modelx backgroundImage flex items-center justify-center"></section>
        <section className="relative h-full w-full p-0 m-0 solarpanel backgroundImage flex items-center justify-center"></section>
        <section className="relative h-full w-full p-0 m-0 solarroof backgroundImage flex items-center justify-center"></section>
        <section className="relative h-full w-full p-0 m-0 accessories backgroundImage flex items-center justify-center"></section>
        <div
          className="fixed top-[20%] h-[75%] w-full z-[2] flex flex-col items-center justify-between"
          onWheel={sectionScrollerHandler}
        >
          <div>
            <>
              <p className="text-[42px] text-black font-medium">
                {sectionInfos.paragraph1}
              </p>
              {sectionInfos.paragraph2}
            </>
          </div>
          <div
            className="flex flex-col items-center justify-start sm:w-[40%]"
            id="cover-div"
          >
            {isDesktopView ? (
              <>
                <div className="relative h-[85%] w-full flex flex-row items-start justify-evenly">
                  <>
                    {sectionInfos.button1}
                    {sectionInfos.button2}
                  </>
                </div>
                {sectionInfos.image}
              </>
            ) : (
              <>
                {sectionInfos.button1}
                {sectionInfos.button2}
                {sectionInfos.image}
              </>
            )}
          </div>
        </div>
      </main>
      {isDesktopView && currentSectionIndex === 6 && (
        <div className="fixed bottom-0 h-[5%] w-full bg-white z-[1] flex items-center justify-center">
          <div className="relative h-full w-[40%] flex flex-row items-center justify-between text-black text-[13px] font-medium">
            <a href="#">Tesla &copy; 2023</a>
            <a href="#">Privacy & Legal</a>
            <a href="#">Vehicle Recalls</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">News</a>
            <a href="#">Engage</a>
            <a href="#">Locations</a>
          </div>
        </div>
      )}
      {!isDesktopView && (
        <div className="fixed bottom-0 h-[5vh] w-full bg-white"></div>
      )}
    </div>
  );
};

export default Home;
