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
import BeautyAndHealthItems from "../../Utils/Home/BeautyAndHealth.json";
import ProductCard from "../../Components/ProductCard/ProductCard";

export default function BeautyAndHealth() {
  return (
    <div className="beautyAndHealth__container">
      {/* section => toppicks */}
      <div className="beautyAndHealth__topPicks">
        <div className="beautyAndHealth__topPicks__title">
          <h3>Today's Top Picks</h3>

          <div className="beautyAndHealth__topPicks__title__filters">
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

        <div className="beautyAndHealth__topPicks__items">
          {BeautyAndHealthItems.map((item) => (
            <ProductCard item={item} key={item.productName} />
          ))}
        </div>
      </div>

      <hr/>
    </div>
  );
}
