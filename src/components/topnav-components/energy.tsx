import { useMenuContext } from "../../hooks";
import { panel, roof, powerwall, megapack } from "../../assets";

const EnergyMenu = () => {
  const { setIsOpen } = useMenuContext();
  return (
    <div
      className={`relative mt-16 w-full flex flex-row items-center justify-center duration-300 py-14 `}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="relative flex flex-row items-start justify-center">
        {energies.map((energy, key) => {
          return (
            <div
              className="relative flex flex-col items-center justify-center mx-6 mt-4"
              key={key}
            >
              <img src={energy.image} alt="" className="relative h-32 w-32" />
              <p className="relative mt-6 text-black text-[1.05rem] tracking-wider">
                {energy.title}
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
        <div className="relative h-52 h-80 border-l-[2px] border-gray-300 ml-16"></div>
        <div className="relative flex flex-col item-start justify-start pl-16 mt-2 mr-32">
          {energyOptions.map((option, key) => {
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

const energies = [
  { title: "Solar Panels", image: panel },
  { title: "Solar Roof", image: roof },
  { title: "Powerwall", image: powerwall },
  { title: "Megapack", image: megapack },
];

const energyOptions = [
  "Schedule a Consultation",
  "Incentives",
  "Support",
  "Partner with Tesla",
  "Commercial",
  "Utilities",
];

export default EnergyMenu;
