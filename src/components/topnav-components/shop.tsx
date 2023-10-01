import { useMenuContext } from "../../hooks";
import { charging, accessories, apparel, lifestyle } from "../../assets";

const ShopMenu = () => {
  const { setIsOpen } = useMenuContext();
  return (
    <div
      className="relative mt-14 w-full flex flex-row items-center justify-center py-14"
      onMouseLeave={() => setIsOpen(false)}
    >
      {shops.map((item, key) => {
        return (
          <div
            className="relative flex flex-col items-center justify-start mx-12"
            key={key}
          >
            <img src={item.image} alt="" className="relative h-32 w-32 mb-2" />
            <p className="font-bold mt-2">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShopMenu;

const shops = [
  { title: "Charging", image: charging },
  { title: "Vehicle Accesories", image: accessories },
  { title: "Apparel", image: apparel },
  { title: "Lifestyle", image: lifestyle },
];
