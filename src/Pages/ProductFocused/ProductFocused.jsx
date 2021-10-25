import React from "react";
import "./style.scss";

// @components
import Sidebar from "../../Components/Sidebar/Sidebar";
import CheckoutButton from "../../Components/CheckoutButton/CheckoutButton";

// @packages
import { Breadcrumbs, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ProductFocused() {
  return (
    <div className="productFocused">
      <CheckoutButton />
      <Sidebar />

      <div className="productFocused__main">
        {/* @section search bar */}
        <div className="productFocused__main__searchBar">
          <input type="text" placeholder="Search Marketplace" />
          <Button>
            <i className="ri-search-line"></i>
          </Button>
        </div>

        {/* @section product details */}
        <div className="productFocused__main__productDetails">
          <h2 className="productFocused__main__productDetails__title">
            Product Details
          </h2>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/getting-started/installation/"
            >
              Ecommerce
            </Link>
            <Typography color="text.primary">
              Nike air force 1 ndestrukt
            </Typography>
          </Breadcrumbs>
        </div>

        {/* @section product display */}
        <div className="productFocused__main__productDisplay">
            this is display
        </div>

        
      </div>
    </div>
  );
}
