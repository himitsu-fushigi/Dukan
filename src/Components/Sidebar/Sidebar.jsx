import React from "react";
import "./style.scss";

// @components
import { Button } from "@material-ui/core";

export default function Sidebar() {
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
        <Button className="item active">
            <i className="ri-store-2-line"></i>
            <span>Browse All</span>
        </Button>
        <Button className="item">
            <i className="ri-notification-line"></i>
            <span>Notifications</span>
        </Button>
        <Button className="item">
            <i className="ri-message-3-line"></i>
            <span>Inbox</span>
        </Button>
        <Button className="item">
            <i className="ri-login-circle-line"></i>
            <span>Your Account</span>
        </Button>
      </div>

      <hr />
    </div>
  );
}
