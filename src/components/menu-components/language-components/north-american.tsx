import { LanguageTypes } from "../containers";
import { Nav } from "../index";
import { arrowRight } from "../../../assets";
import { Language } from "../index";
import { Canada, PuertoRico } from "./index";
import { useMenuContext } from "../../../hooks";

const NortAmerica = () => {
  const { setCurrentMenu, setCurrentTitle } = useMenuContext();

  const updateMenu = (title: string) => {
    setCurrentTitle(title);
    if (title === "Canada") {
      setCurrentMenu(<Canada />);
    } else if (title === "Puerto Rico") {
      setCurrentMenu(<PuertoRico />);
    } else {
      return;
    }
  };

  return (
    <>
      <Nav menu={<Language />} title="Region & Language" />
      <div className="relative mt-28">
        {northAmericaOptions.map((option, key) => {
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

export default NortAmerica;

const northAmericaOptions: LanguageTypes[] = [
  {
    title: "United States",
    children: false,
  },
  {
    title: "Canada",
    children: true,
  },
  {
    title: "Mexico",
    children: false,
  },
  {
    title: "Puerto Rico",
    children: true,
  },
];
