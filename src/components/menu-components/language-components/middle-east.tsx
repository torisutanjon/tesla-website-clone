import { LanguageTypes } from "../containers";
import { Nav } from "../index";
import { arrowRight } from "../../../assets";
import { Language } from "../index";
import { useMenuContext } from "../../../hooks";
import { UAE } from "./index";

const MiddleEast = () => {
  const { setCurrentMenu, setCurrentTitle } = useMenuContext();
  const updateMenu = (title: string) => {
    setCurrentTitle(title);
    if (title === "United Arab Emirates") {
      setCurrentMenu(<UAE />);
    }
  };

  return (
    <>
      <Nav menu={<Language />} title="Region & Language" />
      <div className="relative mt-28">
        {middleEastOptions.map((option, key) => {
          return (
            <div
              className="relative mx-auto mt-3 h-12 w-11/12 flex flex-row items-center justify-between"
              onClick={() => updateMenu(option.title)}
              key={key}
            >
              <p className="ml-3 font-bold text-black/70">{option.title}</p>
              {option.children && (
                <button type="button" className="h-4 w-4">
                  <img
                    src={arrowRight}
                    alt=""
                    className="relative h-4/5 w-4/5"
                  />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MiddleEast;

const middleEastOptions: LanguageTypes[] = [
  {
    title: "Israel",
    children: false,
  },
  {
    title: "United Arab Emirates",
    children: true,
  },
  {
    title: "Jordan",
    children: false,
  },
];
