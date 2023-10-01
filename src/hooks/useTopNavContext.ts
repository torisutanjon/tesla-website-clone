import { useContext } from "react";
import { TopNavContext } from "../contexts/TopNavContext";

const useTopNavContext = () => {
  const { color, setColor } = useContext(TopNavContext);
  return { color, setColor };
};

export default useTopNavContext;
