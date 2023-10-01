const animate = (element: Element) => {
  element.classList.add("active");
};

const animation = {
  fadeIn: () => {
    const element = document.querySelector("fade-in");
    if (!element) return;
    animate(element);
  },
};

export default animation;
