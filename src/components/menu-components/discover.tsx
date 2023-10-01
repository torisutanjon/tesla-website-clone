import { OptionTypes, OptionsContainer } from "./containers";
import { Nav, DefaultMenu } from "./index";

const DiscoverMenu = () => {
  const options: OptionTypes[] = [
    { title: "Demo Drive", link: "#" },
    { title: "Insurance", link: "#" },
    { title: "Video Guides", link: "#" },
    { title: "Customer Stories", link: "#" },
    { title: "Events", link: "#" },
    { title: "Find Us", link: "#" },
    { title: "Trip Planner", link: "#" },
    { title: "Find a Collision Center", link: "#" },
    { title: "Find a Certified Installer", link: "#" },
    { title: "About", link: "#" },
    { title: "Careers", link: "#" },
    { title: "Investor Relations", link: "#" },
  ];
  return (
    <>
      <Nav menu={<DefaultMenu />} title="" />
      <div className="relative mt-24">
        {options.map((option, key) => {
          return (
            <OptionsContainer
              title={option.title}
              link={option.link}
              key={key}
            />
          );
        })}
      </div>
    </>
  );
};

export default DiscoverMenu;
