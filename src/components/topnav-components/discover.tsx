import { useMenuContext } from "../../hooks";

const DiscoverMenu = () => {
  const { setIsOpen } = useMenuContext();
  return (
    <div
      className="relative mt-14 py-20 w-full flex flex-row items-start justify-center"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="relative w- flex flex-col items-start justify-start mx-12">
        <p className="text-[0.975rem] text-black/60 mb-4">Resources</p>
        <div className="relative flex flex-col items-start justify-start">
          {options.resources.map((option, key) => {
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
      <div className="relative flex flex-col items-start justify-start mx-12">
        <p className="text-[0.975rem] text-black/60 mb-4">Location Services</p>
        <div className="relative flex flex-col items-start justify-start">
          {options.location.map((option, key) => {
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
      <div className="relative flex flex-col items-start justify-start mx-12">
        <p className="text-[0.975rem] text-black/60 mb-4">Company</p>
        <div className="relative flex flex-col items-start justify-start">
          {options.company.map((option, key) => {
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

export default DiscoverMenu;

const options = {
  resources: [
    "Demo Drive",
    "Insurance",
    "Video Guides",
    "Customer Stories",
    "Events",
  ],
  location: [
    "Find Us",
    "Trip Planner",
    "Find a Collision Center",
    "Find a Certified Installer",
  ],
  company: ["About", "Careers", "Investor Relations"],
};
