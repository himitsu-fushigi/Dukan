import React from "react";
import "./style.scss";

// @components
import Sidebar from "../../Components/Sidebar/Sidebar";
import CheckoutButton from "../../Components/CheckoutButton/CheckoutButton";
import BrowseAll from "../../Helpers/Home/BrowseAll/BrowseAll";

export default function Home() {
  return (
    <div className="home">
      <CheckoutButton/>
      {/* section => sidebar */}
      <Sidebar />

      {/* section => home__browseall */}
      <div className="home__main">
        <BrowseAll/>
      </div>
    </div>
  );
}
