import { arrowRight, profile, globe } from "../../assets";
import {
  VehicleMenu,
  Energy,
  Charging,
  Discover,
  Language,
  Nav,
} from "./index";
import { useMenuContext } from "../../hooks";

const DefaultMenu = () => {
  const { setCurrentMenu, setCurrentTitle } = useMenuContext();

  const menus = [
    {
      name: "Vehicles",
      type: "small",
      hasArrow: true,
      setMenu: () => {
        setCurrentMenu(<VehicleMenu />), setCurrentTitle("Vehicles");
      },
    },
    {
      name: "Energy",
      type: "small",
      hasArrow: true,
      setMenu: () => {
        setCurrentMenu(<Energy />), setCurrentTitle("Energy");
      },
    },
    {
      name: "Charging",
      type: "small",
      hasArrow: true,
      setMenu: () => {
        setCurrentMenu(<Charging />), setCurrentTitle("Charging");
      },
    },
    {
      name: "Discover",
      type: "small",
      hasArrow: true,
      setMenu: () => {
        setCurrentMenu(<Discover />), setCurrentTitle("Discover");
      },
    },
    { name: "Shop", type: "small", hasArrow: false, setMenu: () => {} },
    { name: "Support", type: "small", hasArrow: false, setMenu: () => {} },
    {
      name: "United States",
      sub: "English",
      type: "big",
      hasArrow: true,
      setMenu: () => {
        setCurrentMenu(<Language />), setCurrentTitle("Region & Language");
      },
    },
    { name: "Account", type: "small", hasArrow: false, setMenu: () => {} },
  ];

  return (
    <>
      <Nav menu={<DefaultMenu />} title="" />
      <div className="relative mt-24">
        {menus.map((menu, key) => {
          return (
            <div
              key={key}
              className={`relative mx-auto mt-3 w-11/12 flex flex-row items-center justify-between px-4 ${
                menu.type === "small" ? "h-14" : "h-24"
              }`}
              onClick={() => menu.setMenu()}
            >
              {menu.name === "Account" && (
                <img src={profile} className="relative h-5 w-5" />
              )}
              <div
                className={`relative w-10/12 flex items-center justify-start ${
                  menu.type === "small" ? "h-6" : "h-16 flex-col"
                }`}
              >
                {menu.type === "small" ? (
                  <p className="font-bold text-lg text-black/75">{menu.name}</p>
                ) : (
                  <>
                    <div className="relative h-1/2 w-full flex flex-row items-center justify-start">
                      <img src={globe} className="relative h-5 w-5" />
                      <p className="ml-2 font-bold text-lg text-black/75">
                        {menu.name}
                      </p>
                    </div>
                    <div className="relative h-1/2 w-full flex items-center justify-start">
                      <p className="ml-8 text-black/50">{menu.sub}</p>
                    </div>
                  </>
                )}
              </div>
              {menu.hasArrow && (
                <img src={arrowRight} className="relative h-3 w-3" />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DefaultMenu;
