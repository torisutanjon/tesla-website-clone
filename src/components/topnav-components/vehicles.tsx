import { useMenuContext } from "../../hooks";
import { models, model3, modely, modelx } from "../../assets";
const VehiclesMenu = () => {
  const { setIsOpen } = useMenuContext();
  return (
    <div
      className={`relative mt-16 w-full flex flex-row items-center justify-center duration-300 py-14 `}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="relative flex flex-row items-start justify-center">
        {vehicles.map((vehicle, key) => {
          return (
            <div
              className="relative flex flex-col items-center justify-center mx-6 mt-4"
              key={key}
            >
              <img src={vehicle.image} alt="" className="relative h-24 w-32 " />
              <p className="relative mt-6 text-black text-[1.05rem] tracking-wider">
                {vehicle.title}
              </p>
              <div className="relative flex flex-row items-center justify-center">
                <a
                  href="#"
                  className="mr-2 text-xs text-[0.825rem] text-black/75 underline underline-offset-2"
                >
                  Learn
                </a>
                <a
                  href="#"
                  className="ml-2 text-xs text-[0.825rem] text-black/75 underline underline-offset-2"
                >
                  Order
                </a>
              </div>
            </div>
          );
        })}
        <div className="relative h-80 border-l-[2px] border-gray-300 ml-16"></div>
        <div className="relative flex flex-col item-start justify-start pl-16 mt-2 mr-32">
          {vehicleOptions.map((option, key) => {
            return (
              <a
                href="#"
                key={key}
                className="mb-2 mt-1 text-sm text-black/75 font-bold tracking-wider underline-offset-4 decoration-2 hover:underline"
              >
                {option}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const vehicles = [
  { title: "Model S", image: models },
  { title: "Model 3", image: model3 },
  { title: "Model X", image: modelx },
  { title: "Model Y", image: modely },
];

const vehicleOptions = [
  "Inventory",
  "Used Cars",
  "Demo Drive",
  "Trade-in",
  "Help Me Choose",
  "Compare",
  "Fleet",
  "Cybertruck",
  "Semi",
  "Roadster",
];

export default VehiclesMenu;
