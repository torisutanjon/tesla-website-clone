import {
  OptionTypes,
  ProductTypes,
  OptionsContainer,
  ProductContainer,
} from "./containers";
import { Nav, DefaultMenu } from ".";
import { panel, roof, powerwall, megapack } from "../../assets";

const EnergyMenu = () => {
  const products: ProductTypes[] = [
    {
      image: panel,
      title: "Solar Panels",
      learnLink: "#",
      orderLink: "#",
    },
    {
      image: roof,
      title: "Solar Roof",
      learnLink: "#",
      orderLink: "#",
    },
    {
      image: powerwall,
      title: "Powerwall",
      learnLink: "#",
      orderLink: "#",
    },
    {
      image: megapack,
      title: "Megapack",
      learnLink: "#",
      orderLink: "#",
    },
  ];

  const options: OptionTypes[] = [
    { title: "Schedule a Consultation", link: "#" },
    { title: "Incentives", link: "#" },
    { title: "Support", link: "#" },
    { title: "Partner with Tesla", link: "#" },
    { title: "Commercial", link: "#" },
    { title: "Utilities", link: "#" },
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

export default EnergyMenu;
