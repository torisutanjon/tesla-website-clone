import { useMenuContext } from "../hooks";
import { useTopNavContext } from "../hooks";
import { useState } from "react";
import * as menus from "./topnav-components";
import {
  FAQBlack,
  FAQWhite,
  globe,
  globeWhite,
  profile,
  profileWhite,
} from "../assets";

const TopNav = () => {
  const { isOpen, setIsOpen, setCurrentMenu, currentMenu } = useMenuContext();
  const { color } = useTopNavContext();
  const [openColor] = useState("text-[#000000bf]");
  const [languagOpen, setLanguageOpen] = useState(false);

  const mouseInHandler = (menu: JSX.Element) => {
    setCurrentMenu(menu);
    setLanguageOpen(false);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setLanguageOpen(false);
    setIsOpen(false);
  };

  const onClickHandler = (menu: JSX.Element) => {
    setCurrentMenu(menu);
    setLanguageOpen(true);
    setIsOpen(true);
  };

  return (
    <div className="fixed mt-28 h-16 w-full flex flex-row items-center justify-between px-4 z-20 sm:px-8 sm:mt-[4.5rem] lg:mt-14 lg:px-16">
      <div
        className={`fixed top-14 left-0 hidden w-screen bg-orange z-10 bg-white duration-1000 lg:flex ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {isOpen && currentMenu}
      </div>
      <a
        href="#"
        className={`ml-4 font-tesla text-xl tracking-[0.5rem] duration-200 z-20 ${
          isOpen ? openColor : color
        }`}
        onMouseOver={() => setIsOpen(false)}
      >
        TESLA
      </a>
      <div className="relative h-full w-96 hidden flex-row items-center justify-between lg:flex xl:justify-evenly xl:w-1/3">
        <p
          className={`font-[600] cursor-pointer duration-200 z-20 ${
            isOpen ? openColor : color
          }`}
          onMouseOver={() => mouseInHandler(<menus.VehiclesMenu />)}
        >
          Vehicles
        </p>
        <p
          className={`font-[600] cursor-pointer duration-200 z-20 ${
            isOpen ? openColor : color
          }`}
          onMouseOver={() => mouseInHandler(<menus.EnergyMenu />)}
        >
          Energy
        </p>
        <p
          className={`font-[600] cursor-pointer duration-200 z-20 ${
            isOpen ? openColor : color
          }`}
          onMouseOver={() => mouseInHandler(<menus.ChargingMenu />)}
        >
          Charging
        </p>
        <p
          className={`font-[600] cursor-pointer duration-200 z-20 ${
            isOpen ? openColor : color
          }`}
          onMouseOver={() => mouseInHandler(<menus.DiscoverMenu />)}
        >
          Discover
        </p>
        <p
          className={`font-[600] cursor-pointer duration-200 z-20 ${
            isOpen ? openColor : color
          }`}
          onMouseOver={() => mouseInHandler(<menus.ShopMenu />)}
        >
          Shop
        </p>
      </div>
      <div className="relative h-full w-24 hidden flex-row items-center justify-between lg:flex">
        <button
          className="relative h-6 w-6 flex items-center justify-center duration-200 z-20"
          onMouseOver={() => languagOpen === false && setIsOpen(false)}
        >
          <img
            src={
              isOpen ? FAQBlack : color === "text-white" ? FAQWhite : FAQBlack
            }
            alt=""
            className="relative h-4/5 w-4/5"
          />
        </button>
        <button
          className="relative h-6 w-6 flex items-center justify-center duration-200 z-20"
          onMouseOver={() => languagOpen === false && setIsOpen(false)}
          onClick={() =>
            isOpen ? closeMenu() : onClickHandler(<menus.LanguageMenu />)
          }
        >
          <img
            src={isOpen ? globe : color === "text-white" ? globeWhite : globe}
            alt=""
            className="relative h-4/5 w-4/5"
          />
        </button>
        <button
          className="relative h-6 w-6 flex items-center justify-center duration-200 z-20"
          onMouseOver={() => languagOpen === false && setIsOpen(false)}
        >
          <img
            src={
              isOpen ? profile : color === "text-white" ? profileWhite : profile
            }
            alt=""
            className="relative h-4/5 w-4/5"
          />
        </button>
      </div>
      <button
        type="button"
        className={`relative h-9 w-16 font-medium text-sm backdrop-blur-md lg:hidden ${
          isOpen ? openColor : color
        }`}
        onClick={() => setIsOpen(true)}
      >
        Menu
      </button>
    </div>
  );
};

export default TopNav;
