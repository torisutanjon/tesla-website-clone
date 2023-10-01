import { useMenuContext } from "../hooks";

const Header = () => {
  const { isOpen } = useMenuContext();

  return (
    <div
      className={`relative h-24 w-full flex items-center justify-center py-6 px-6 text-white text-sm sm:h-[4.5rem] lg:h-14 ${
        isOpen ? "bg-black" : "gradient-header"
      }`}
    >
      <div className="text-center sm:tracking-wide">
        <p className="inline text-[0.90rem] font-bold sm:text-[1.15rem] leading-[0px] sm:leading-3">
          $7,500 Federal Tax Credit
        </p>
        <p className="ml-4 inline text-[0.90rem] leading-[0px] sm:leading-3">
          Available for new Model3, Model Y and Model X. Reductions to tax
          credit likely after Dec 31.
          <span>
            <a href="#" className="ml-4 underline underline-offset-2">
              See Details
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
