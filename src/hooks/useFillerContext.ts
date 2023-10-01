import { useContext } from "react";
import { FillerContext } from "../contexts/FillerContext";

const useFillerContext = () => {
  const { data, setData } = useContext(FillerContext);
  return {
    data,
    setData,
  };
};

export default useFillerContext;
