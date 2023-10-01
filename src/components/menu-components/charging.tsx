import {
  ProductTypes,
  OptionTypes,
  ProductContainer,
  OptionsContainer,
} from "./containers";
import { Nav, DefaultMenu } from "./index";
import { charging, home_charging, powerwall } from "../../assets";

const ChargingMenu = () => {
  const products: ProductTypes[] = [
    {
      image: charging,
      title: "Charging",
      learnLink: "#",
      orderLink: "#",
    },
    {
      image: home_charging,
      title: "Home Charging",
      learnLink: "#",
      orderLink: "#",
    },
    {
      image: powerwall,
      title: "Supercharging",
      learnLink: "#",
      orderLink: "#",
    },
  ];

  const options: OptionTypes[] = [
    {
      title: "Charging Calculator",
      link: "#",
    },
    {
      title: "Trip Planner",
      link: "#",
    },
    {
      title: "Supercharger Voting",
      link: "#",
    },
    {
      title: "Host a Supercharger",
      link: "#",
    },
    {
      title: "Commercial Charging",
      link: "#",
    },
    {
      title: "Host Wall Connectors",
      link: "#",
    },
  ];
  return (
    <>
      <Nav menu={<DefaultMenu />} title="" />
      <div className="relative mt-24">
        {products.map((product, key) => {
          return (
            <ProductContainer
              image={product.image}
              title={product.title}
              learnLink={product.learnLink}
              orderLink={product.orderLink}
              key={key}
            />
          );
        })}
        <div className="relative my-8 h-1 w-full"></div>
        {options.map((option, key) => {
          return (
            <OptionsContainer
              title={option.title}
              link={option.link}
              key={key}
            />
          );
        })}
      </div>
    </>
  );
};

export default ChargingMenu;
