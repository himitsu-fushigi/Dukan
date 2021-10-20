import React from "react";
import "./style.scss";

// @components
import { Button } from "@material-ui/core";

// @helpers
import MarketPlaces from "../../Utils/Sidebar/Marketplaces.json";
import Categories from "../../Utils/Sidebar/Categories.json";

// @cont3xt
import { useActiveSidebarDataLayerValue } from "../../Context/Sidebar/ActiveSidebarItem";

export default function Sidebar() {
  const [{ active }, dispatch] = useActiveSidebarDataLayerValue();

  // @dev function to dispatch active tabs
  // @param active bar name
  const handleSidebarActiveDispatch = (payload) => {
    dispatch({
      type: "SET_ACTIVE_BAR",
      activeBar: payload,
    });
  };

  return (
    <div className="sidebar">
      {/* section => title */}
      <h1 className="sidebar__title">Dukan.</h1>

      {/* section => search bar */}
      <div className="sidebar__searchBar">
        <i className="ri-search-2-line"></i>
        <input type="text" placeholder="Search Marketplace" />
      </div>

      {/* section => marketplace listing */}
      <div className="sidebar__marketplaceListing">
        {MarketPlaces.map((item) => (
          <Button
            onClick={() => handleSidebarActiveDispatch(item.activeName)}
            key={item.name}
            className={`item ${active === item.activeName && "active"}`}
          >
            <i className={item.icon}></i> <span>{item.name}</span>
          </Button>
        ))}
      </div>

      <hr />

      {/* section => category listing */}
      <div className="sidebar_categoryListing">
        <h3 className="title">Categories</h3>
        {Categories.map((category) => (
          <Button
            onClick={() => handleSidebarActiveDispatch(category.activeName)}
            key={category.name}
            className={`item ${active === category.activeName && "active"}`}
          >
            <i className={category.icon}></i> <span>{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
