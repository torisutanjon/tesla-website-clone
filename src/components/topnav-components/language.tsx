const LanguageMenu = () => {
  return (
    <div className="relative mt-14 px-20 py-14 pb-52 h-screen w-screen overflow-y-auto xl:px-0 xl:pb-24">
      <div className="relative pb-14 w-full flex flex-row items-start justify-center">
        <div className="relative mr-12 flex flex-col xl:mr-24">
          <div className="relative mb-4 flex flex-col">
            <p className="ml-2 mb-2 font-bold text-xl tracking-widest text-black/80">
              North America
            </p>
            {northamerican.map((country, key) => {
              return (
                <div className="relative my-2 flex flex-col" key={key}>
                  <p className="ml-2 text-[0.925rem] font-bold text-black/70 tracking-wider">
                    {country.name}
                  </p>
                  <div className="relative flex flex-row items-start justify-start">
                    {country.languages.map((language, key) => {
                      return (
                        <a
                          href="#"
                          className="mx-2 text-[0.775rem] text-black/70 tracking-wider duration-1000 underline underline-offset-4 decoration-2 decoration-white hover:decoration-black/70"
                          key={key}
                        >
                          {language}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative flex flex-col">
            <p className="ml-2 mb-2 font-bold text-xl tracking-widest text-black/80">
              Middle-East
            </p>
            {middleeast.map((country) => {
              return (
                <div className="relative my-2 flex flex-col">
                  <p className="ml-2 text-[0.925rem] font-bold text-black/70 tracking-wider">
                    {country.name}
                  </p>
                  <div className="relative flex flex-row items-start justify-start">
                    {country.languages.map((language) => {
                      return (
                        <a
                          href="#"
                          className="mx-2 text-[0.775rem] text-black/70 tracking-wider duration-1000 underline underline-offset-4 decoration-2 decoration-white hover:decoration-black/70"
                        >
                          {language}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative flex flex-row">
          <div className="relative mr-12 flex flex-col xl:mr-24">
            <p className="ml-2 mb-2 font-bold text-xl tracking-widest text-black/80">
              Asia Pacific
            </p>
            {asiapacific.map((country) => {
              return (
                <div className="relative my-2 flex flex-col">
                  <p className="ml-2 text-[0.925rem] font-bold text-black/70 tracking-wider">
                    {country.name}
                  </p>
                  <div className="relative flex flex-row items-start justify-start">
                    {country.languages.map((language) => {
                      return (
                        <a
                          href="#"
                          className="mx-2 text-[0.775rem] text-black/70 tracking-wider duration-1000 underline underline-offset-4 decoration-2 decoration-white hover:decoration-black/70"
                        >
                          {language}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative flex flex-col">
            <p className="ml-2 mb-2 font-bold text-xl tracking-wider text-black/80">
              Europe
            </p>
            <div className="relative grid grid-cols-3">
              {europe.map((country) => {
                return (
                  <div className="relative my-2 flex flex-col">
                    <p className="ml-2 text-[0.925rem] font-bold text-black/70 tracking-wider">
                      {country.name}
                    </p>
                    <div className="relative flex flex-row items-start justify-start">
                      {country.languages.map((language) => {
                        return (
                          <a
                            href="#"
                            className="mx-2 text-[0.775rem] text-black/70 tracking-wider duration-1000 underline underline-offset-4 decoration-2 decoration-white hover:decoration-black/70"
                          >
                            {language}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageMenu;

const northamerican = [
  { name: "United States", languages: ["English"] },
  { name: "Canada", languages: ["English", "Français"] },
  { name: "México", languages: ["Español"] },
  { name: "Puerto Rico", languages: ["English", "Español"] },
];

const middleeast = [
  { name: "ישראל", languages: ["עִברִית"] },
  { name: "UAE", languages: ["English", "اَلْعَرَبِيَّةُ"] },
  { name: "Jordan", languages: ["English"] },
];

const asiapacific = [
  { name: "中国大陆", languages: ["简体中文"] },
  { name: "Hong Kong", languages: ["繁體中文", "English"] },
  { name: "Macau", languages: ["繁體中文", "English"] },
  { name: "台灣", languages: ["繁體中文"] },
  { name: "日本", languages: ["日本語"] },
  { name: "Malaysia", languages: ["English"] },
  { name: "Singapore", languages: ["English"] },
  { name: "Thailand", languages: ["ภาษาไทย", "English"] },
  { name: "대한민국", languages: ["한국어"] },
  { name: "Australia", languages: ["English"] },
  { name: "New Zealand", languages: ["English"] },
];

const europe = [
  { name: "Belgium", languages: ["Nederlands", "Français"] },
  { name: "Ireland", languages: ["English"] },
  { name: "Románia", languages: ["Română"] },
  { name: "Česko", languages: ["Čeština"] },
  { name: "Island", languages: ["Íslenska"] },
  { name: "Slovenija", languages: ["Slovenščina"] },
  { name: "Danmark", languages: ["Dansk"] },
  { name: "Italia", languages: ["Italiano"] },
  { name: "Switzerland", languages: ["Français", "Deutsch", "Italiano"] },
  { name: "Deutschland", languages: ["Deutsch"] },
  { name: "Luxembourg", languages: ["Français", "Deutsch"] },
  { name: "Sverige", languages: ["Svenska"] },
  { name: "Ελλάδα", languages: ["Ελληνικά"] },
  { name: "Nederland", languages: ["Nederlands"] },
  { name: "Soumi", languages: ["Suomi"] },
  { name: "España", languages: ["Español"] },
  { name: "Norge", languages: ["Norsk"] },
  { name: "Türkiye", languages: ["Türkçe"] },
  { name: "France", languages: ["Français"] },
  { name: "Österreich", languages: ["Deutsch"] },
  { name: "United Kingdom", languages: ["English"] },
  { name: "Hrvatska", languages: ["Hrvatski"] },
  { name: "Polska", languages: ["Polski"] },
  { name: "Other Europe", languages: ["English"] },
  { name: "Magyarország", languages: ["Magyar"] },
  { name: "Portugal", languages: ["Português"] },
];
