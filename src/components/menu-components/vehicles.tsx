import {
  ProductTypes,
  OptionTypes,
  OptionsContainer,
  ProductContainer,
} from "./containers";
import { Nav, DefaultMenu } from "./index";

import { models, model3, modelx, modely } from "../../assets";

const VehiclesMenu = () => {
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

export default VehiclesMenu;

const products: ProductTypes[] = [
  {
    image: models,
    title: "Model S",
    learnLink: "#",
    orderLink: "#",
  },
  {
    image: model3,
    title: "Model 3",
    learnLink: "#",
    orderLink: "#",
  },
  {
    image: modelx,
    title: "Model X",
    learnLink: "#",
    orderLink: "#",
  },
  {
    image: modely,
    title: "Model Y",
    learnLink: "#",
    orderLink: "#",
  },
];
const options: OptionTypes[] = [
  { title: "Inventory", link: "#" },
  { title: "Used Cars", link: "#" },
  { title: "Demo Drive", link: "#" },
  { title: "Trade-In", link: "#" },
  { title: "Help Me Choose", link: "#" },
  { title: "Compare", link: "#" },
  { title: "Fleet", link: "#" },
  { title: "Cybertruck", link: "#" },
  { title: "Semi", link: "#" },
  { title: "Roadster", link: "#" },
];
