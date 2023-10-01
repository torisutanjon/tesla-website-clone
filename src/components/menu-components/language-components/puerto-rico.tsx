import { LanguageTypes } from "../containers";
import { Nav } from "../index";
import { arrowRight } from "../../../assets";
import { NorthAmerica } from "./index";

const PuertoRico = () => {
  return (
    <>
      <Nav menu={<NorthAmerica />} title="North America" />
      <div className="relative mt-28">
        {puertoRico.map((option, key) => {
          return (
            <div
              className="relative mx-auto mt-3 h-12 w-11/12 flex flex-row items-center justify-between"
              key={key}
            >
              <p className="ml-3 font-bold text-black/70">{option.title}</p>
              {option.children && (
                <button type="button" className="h-4 w-4">
                  <img
                    src={arrowRight}
                    alt=""
                    className="relative h-4/5 w-4/5"
                  />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PuertoRico;

const puertoRico: LanguageTypes[] = [
  { title: "English", children: false },
  { title: "Spanish", children: false },
];
