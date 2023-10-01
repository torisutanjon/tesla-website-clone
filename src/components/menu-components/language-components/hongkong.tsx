import { LanguageTypes } from "../containers";
import { Nav } from "../index";
import { arrowRight } from "../../../assets";
import { AsiaPacific } from "./index";

const Hongkong = () => {
  return (
    <>
      <Nav menu={<AsiaPacific />} title="Asia Pacific" />

      <div className="relative mt-28">
        {hongkongOptions.map((option, key) => {
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

export default Hongkong;

const hongkongOptions: LanguageTypes[] = [
  { title: "Chinese", children: false },
  { title: "English", children: false },
];
