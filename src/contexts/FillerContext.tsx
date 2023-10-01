import { createContext, useState, Dispatch } from "react";

interface ContextTypes {
  data: {
    title: string;
    headerOne: string;
    headerTwo: string;
    buttonOneText: string;
    buttonTwoText: string;
    footer: string;
    link: string;
    textColor: string;
  };
  setData: Dispatch<React.SetStateAction<ContextTypes["data"]>>;
}

export const FillerContext = createContext<ContextTypes>({
  data: {
    title: "",
    headerOne: "",
    headerTwo: "",
    buttonOneText: "",
    buttonTwoText: "",
    footer: "",
    link: "",
    textColor: "",
  },
  setData: () => {},
});

const FillerProvider = ({ children }: { children: JSX.Element }) => {
  const [data, setData] = useState<ContextTypes["data"]>({
    title: "",
    headerOne: "",
    headerTwo: "",
    buttonOneText: "",
    buttonTwoText: "",
    footer: "",
    link: "",
    textColor: "",
  });

  return (
    <FillerContext.Provider value={{ data, setData }}>
      {children}
    </FillerContext.Provider>
  );
};

export default FillerProvider;
