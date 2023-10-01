import { useState } from "react";
import { Nav, DefaultMenu } from "./index";
import { arrowRight } from "../../assets";
import { useMenuContext } from "../../hooks";
import { LanguageTypes } from "./containers";
import {
  NorthAmerica,
  MiddleEast,
  AsiaPacific,
  Europe,
} from "./language-components";

const LanguageMenu = () => {
  const { setCurrentMenu, setCurrentTitle } = useMenuContext();
  const [currentOptions] = useState(defaultOptions);

  const updateMenu = (title: string) => {
    setCurrentTitle(title);
    if (title === "North America") {
      setCurrentMenu(<NorthAmerica />);
    } else if (title === "Middle East") {
      setCurrentMenu(<MiddleEast />);
    } else if (title === "Asia Pacific") {
      setCurrentMenu(<AsiaPacific />);
    } else if (title === "Europe") {
      setCurrentMenu(<Europe />);
    } else {
      window.alert("Link not found");
    }
  };

  return (
    <>
      <Nav menu={<DefaultMenu />} title="" />
      <div className="relative mt-24">
        {currentOptions.map((option, key) => {
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

const defaultOptions: LanguageTypes[] = [
  { title: "North America", children: true },
  { title: "Middle East", children: true },
  { title: "Asia Pacific", children: true },
  { title: "Europe", children: true },
];
export default LanguageMenu;
