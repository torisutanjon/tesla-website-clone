import * as Component from "./components";
import {
  FillerContextProvider,
  FooterContextProvider,
  MenuContextProvider,
  TopNavContextProvider,
} from "./contexts";

function App() {
  return (
    <FillerContextProvider>
      <FooterContextProvider>
        <MenuContextProvider>
          <TopNavContextProvider>
            <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-start font-inter">
              <Component.Header />
              <Component.TopNav />
              <Component.Filler />
              <Component.Menu />
              <div className="relative calc-height w-full snap-y snap-mandatory snap-always overflow-y-auto">
                <Component.Model3 />
                <Component.ModelY />
                <Component.ModelS />
                <Component.ModelX />
                <Component.ExperienceTesla />
                <Component.SolarPanel />
                <Component.SolarRoof />
                <Component.PowerWall />
                <Component.Accessories />
                <Component.Footer />
              </div>
            </div>
          </TopNavContextProvider>
        </MenuContextProvider>
      </FooterContextProvider>
    </FillerContextProvider>
  );
}

export default App;
