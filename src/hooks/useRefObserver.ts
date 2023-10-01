import { useEffect, useRef, useState, useMemo } from "react";

const useObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observeRef = useRef<HTMLDivElement>(null);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting)),
    []
  );

  useEffect(() => {
    if (!observeRef.current) return;
    observer.observe(observeRef.current);

    return () => {
      observer.disconnect();
    };
  }, [observeRef, observer]);

  return { isVisible, observeRef };
};

export default useObserver;
