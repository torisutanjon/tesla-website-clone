import { createContext, useState, Dispatch } from "react";

interface ContextTypes {
  color: string;
  setColor: Dispatch<React.SetStateAction<string>>;
}

export const TopNavContext = createContext<ContextTypes>({
  color: "text-[#ffffff99]",
  setColor: () => {},
});

const TopNavProvider = ({ children }: { children: JSX.Element }) => {
  const [color, setColor] = useState("text-[#ffffff99]");
  return (
    <TopNavContext.Provider value={{ color, setColor }}>
      {children}
    </TopNavContext.Provider>
  );
};

export default TopNavProvider;
