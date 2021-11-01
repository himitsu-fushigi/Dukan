import React from "react";
import "./style.scss";

/**
 * @components User defined components
 */
import ProductFilters from "../../Components/ProductFilters/ProductFilters";

/**
 * @packages NPM/Yarn registry packages
 */
import { Button } from "@material-ui/core";

/**
 *
 * @utils Utility tools
 */
import VehicleItems from "../../Utils/Home/Vehicles.json";
import ProductCard from "../../Components/ProductCard/ProductCard";

export default function Vehicles() {
  return (
    <div className="vehicles__container">
      {/* section => toppicks */}
      <div className="vehicles__topPicks">
        <div className="vehicles__topPicks__title">
          <h3>Today's Top Picks</h3>

          <div className="vehicles__topPicks__title__filters">
            <ProductFilters />

            <Button>
              <span>
                Sort By:
                <select name="" id="" defaultValue="featured">
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-htl">Price: High to Low</option>
                  <option value="price-lth">Price: Low to High</option>
                </select>
              </span>
            </Button>
          </div>
        </div>

        <div className="vehicles__topPicks__items">
          {VehicleItems.map((item) => (
            <ProductCard item={item} key={item.productName} />
          ))}
        </div>
      </div>

      <hr/>
    </div>
  );
}
