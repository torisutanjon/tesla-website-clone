export interface LanguageTypes {
  title: string;
  children: boolean;
}

export interface ProductTypes {
  image: string;
  title: string;
  learnLink: string;
  orderLink: string;
}

export interface OptionTypes {
  title: string;
  link: string;
}

export const ProductContainer = ({
  image,
  title,
  learnLink,
  orderLink,
}: ProductTypes) => {
  return (
    <div className="relative mx-auto mt-3 h-24 w-11/12 flex flex-row">
      <div className="relative h-full w-1/2 flex items-center justify-center">
        <img src={image} alt="" className="relative h-3/4 w-3/4" />
      </div>
      <div className="relative h-full w-1/2 flex flex-col items-center justify-center">
        <div className="relative h-1/3 w-full flex items-center justify-start">
          <p className="ml-2 text-[1.1rem] font-bold text-black/70 leading-loose">
            {title}
          </p>
        </div>
        <div className="relative h-1/3 w-full flex flex-row items-center justify-start">
          <a
            className="ml-2 text-[0.95rem] text-black/70 underline underline-offset-2 leading-loose"
            href={learnLink}
          >
            Learn
          </a>
          <a
            className="ml-5 text-[0.95rem] text-black/70 underline underline-offset-2 leading-loose"
            href={orderLink}
          >
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export const OptionsContainer = ({ title, link }: OptionTypes) => {
  return (
    <a href={link}>
      <div className="relative mx-auto mt-2 h-14 w-11/12 flex items-center justify-start">
        <p className="ml-2 font-bold text-black/70 leading-loose">{title}</p>
      </div>
    </a>
  );
};
