import { LanguageTypes } from "../containers";
import { Nav } from "../index";
import { arrowRight } from "../../../assets";
import { Language } from "../index";
import { useMenuContext } from "../../../hooks";
import { Hongkong, Macau, Thailand } from "./index";

const AsiaPacific = () => {
  const { setCurrentMenu, setCurrentTitle } = useMenuContext();

  const updateMenu = (title: string) => {
    setCurrentTitle(title);
    if (title === "Hong Kong") {
      setCurrentMenu(<Hongkong />);
    } else if (title === "Macau") {
      setCurrentMenu(<Macau />);
    } else if (title === "Thailand") {
      setCurrentMenu(<Thailand />);
    } else {
      return;
    }
  };

  return (
    <>
      <Nav menu={<Language />} title="Region & Language" />
      <div className="relative mt-28">
        {asiaOptions.map((option, key) => {
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

export default AsiaPacific;

const asiaOptions: LanguageTypes[] = [
  { title: "China", children: false },
  {
    title: "Hong Kong",
    children: true,
  },
  {
    title: "Macau",
    children: true,
  },
  { title: "Taiwan", children: false },
  { title: "Japan", children: false },
  { title: "Malaysia", children: false },
  { title: "Singapore", children: false },
  {
    title: "Thailand",
    children: true,
  },
  { title: "South Korea", children: false },
  { title: "Australia", children: false },
  { title: "New Zealand", children: false },
];
