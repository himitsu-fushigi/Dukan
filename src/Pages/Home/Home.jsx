import React from "react";
import "./style.scss";

/**
 * @components User Defined Components
 */
import Sidebar from "../../Components/Sidebar/Sidebar";
import CheckoutButton from "../../Components/CheckoutButton/CheckoutButton";

/**
 * @pages User defined pages
 */
import BrowseAll from "../../Helpers/Home/BrowseAll/BrowseAll";
import Vehicles from "../Vehicles/Vehicles";
import Clothing from "../Clothing/Clothing";
import Electronics from "../Electronics/Electronics";
import BeautyAndHealth from "../BeautyAndHealth/BeautyAndHealth";
import ComputerAndPeripherals from "../ComputerAndPeripherals/ComputerAndPeripherals";
import Family from "../Family/Family";
import ToysAndGames from "../ToysAndGames/ToysAndGames";
import Inbox from "../Inbox/Inbox";

/**
 * @cont3xt api global state manager
 */
import { useActiveSidebarDataLayerValue } from "../../Context/Sidebar/ActiveSidebarItem";

export default function Home() {
  const [{ active }] = useActiveSidebarDataLayerValue();
  return (
    <div className="home">
      <CheckoutButton />
      {/* section => sidebar */}
      <Sidebar />

      <div className="home__main">
        {/* section => home__browseall */}
        {active === "browse-all" && <BrowseAll />}
        
        {/* section => inbox */}
        {active === "inbox" && <Inbox />}

        {/* @categories */}
        {/* section => vehicles */}
        {active === "vehicles" && <Vehicles />}

        {/* section => clothing */}
        {active === "clothing" && <Clothing />}

        {/* section => electronics */}
        {active === "electronics" && <Electronics />}

        {/* section => beauty and health */}
        {active === "beauty-health" && <BeautyAndHealth />}

        {/* section => computer and peripherals */}
        {active === "computer-peripherals" && <ComputerAndPeripherals />}

        {/* section => family */}
        {active === "family" && <Family />}

        {/* section => toys and games */}
        {active === "toys-games" && <ToysAndGames />}
      </div>
    </div>
  );
}
