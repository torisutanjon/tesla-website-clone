import { useFillerContext, useFooterContext } from "../hooks";

const Filler = () => {
  const { data } = useFillerContext();
  const { isVisible } = useFooterContext();

  return (
    <>
      <p
        className={`fixed mt-56 z-10 ${data.textColor} font-bold text-4xl cursor-default sm:mt-40 lg:text-5xl`}
      >
        {data.title}
      </p>
      <p
        className={`fixed mt-64 z-10  cursor-default sm:mt-[12.5rem] ${
          data.textColor
        } ${
          data.title === "Experience Tesla" || data.title === "Solar Roof"
            ? "font-medium"
            : "font-bold text-lg"
        }
          ${
            data.title === "Solar Panels" &&
            "font-medium underline underline-offset-2 text-base"
          }
          
        `}
      >
        {data.headerOne}
      </p>
      <p
        className={`fixed mt-72 z-10 text-center ${data.textColor} text-[0.7rem] cursor-default sm:mt-[14rem]`}
      >
        {data.headerTwo}
      </p>
      <div
        className={`fixed mb-20 h-24 w-full flex flex-col items-center justify-between z-10 duration-500 sm:flex-row sm:justify-evenly md:justify-center ${
          isVisible ? "bottom-32" : "bottom-0"
        }`}
      >
        {data.buttonOneText !== "" && (
          <button
            type="button"
            className={`h-10 w-5/6 rounded-md text-sm duration-500 sm:w-64 md:w-64 md:mr-4 ${
              isVisible ? "bg-white" : "bg-white/80"
            }
            ${data.title === "Accessories" && "lg:bg-white"}
            `}
          >
            {data.buttonOneText}
          </button>
        )}
        {data.buttonTwoText !== "" && (
          <button
            type="button"
            className={`h-10 w-5/6 rounded-md text-sm text-white/80 backdrop-blur-md sm:w-64 md:w-64 md:ml-4 ${
              data.title === "Experience Tesla"
                ? "border-[2px] border-white/70"
                : "text-sm bg-black/50"
            }
            `}
          >
            {data.buttonTwoText}
          </button>
        )}
      </div>
      <span
        className={`fixed bottom-0 mb-3 z-10 px-12 text-xs text-center cursor-default ${data.textColor} sm:text-[0.85rem] md:text-sm`}
      >
        <p>{data.footer}</p>
        <a href="#" className="underline underline-offset-2">
          {data.link}
        </a>
      </span>
    </>
  );
};

export default Filler;
