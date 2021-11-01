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
import ClothingItems from "../../Utils/Home/Clothing.json";
import ProductCard from "../../Components/ProductCard/ProductCard";

export default function Clothing() {
  return (
    <div className="clothing__container">
      {/* section => toppicks */}
      <div className="clothing__topPicks">
        <div className="clothing__topPicks__title">
          <h3>Today's Top Picks</h3>

          <div className="clothing__topPicks__title__filters">
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

        <div className="clothing__topPicks__items">
          {ClothingItems.map((item) => (
            <ProductCard item={item} key={item.productName} />
          ))}
        </div>
      </div>

      <hr/>
    </div>
  );
}
