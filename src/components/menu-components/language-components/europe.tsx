import { LanguageTypes } from "../containers";
import { Nav } from "../index";
import { arrowRight } from "../../../assets";
import { Language } from "../index";
import { useMenuContext } from "../../../hooks";
import { Belgium, Luxembourg, Switzerland } from "./index";

const Europe = () => {
  const { setCurrentMenu, setCurrentTitle } = useMenuContext();

  const updateMenu = (title: string) => {
    setCurrentTitle(title);
    if (title === "Belgium") {
      setCurrentMenu(<Belgium />);
    } else if (title === "Luxembourg") {
      setCurrentMenu(<Luxembourg />);
    } else if (title === "Switzerland") {
      setCurrentMenu(<Switzerland />);
    } else {
      return;
    }
  };

  return (
    <>
      <Nav menu={<Language />} title="Region & Language" />
      <div className="relative mt-28">
        {europeOptions.map((option, key) => {
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

export default Europe;

const europeOptions: LanguageTypes[] = [
  {
    title: "Belgium",
    children: true,
  },
  { title: "Czechia", children: false },
  { title: "Denmark", children: false },
  { title: "Germany", children: false },
  { title: "Greece", children: false },
  { title: "Spain", children: false },
  { title: "France", children: false },
  { title: "Croatia", children: false },
  { title: "Hungary", children: false },
  { title: "Ireland", children: false },
  { title: "Iceland", children: false },
  { title: "Italy", children: false },
  {
    title: "Luxembourg",
    children: true,
  },
  { title: "Netherlands", children: false },
  { title: "Norway", children: false },
  { title: "Austria", children: false },
  { title: "Poland", children: false },
  { title: "Portuagal", children: false },
  { title: "Romania", children: false },
  { title: "Slovenia", children: false },
  {
    title: "Switzerland",
    children: true,
  },
  { title: "Sweden", children: false },
  { title: "Finland", children: false },
  { title: "United Kingdom", children: false },
  { title: "European Union", children: false },
  { title: "Türkiye", children: false },
];
