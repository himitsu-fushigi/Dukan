import React from "react";
import "./style.scss";

// @components
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Button } from "@material-ui/core";
import ProductFilters from "../../Components/ProductFilters/ProductFilters";
import ProductCard from "../../Components/ProductCard/ProductCard";

// @utils
import TopPickItems from "../../Utils/Home/TopPickProducts.json";

export default function Home() {
  return (
    <div className="home">
      {/* section => sidebar */}
      <Sidebar />

      {/* section => home__browseall */}
      <div className="home__browseAll">
        {/* section => top picks */}
        <div className="home__browseAll__topPicks">
          {/* section => top picks => title */}
          <div className="home__browseAll__topPicks__title">
            <h3>Today's Top Picks</h3>

            <div className="home__browseAll__topPicks__title__filters">
              <ProductFilters/>

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

          {/* section => top picks => items */}
          <div className="home__browseAll__topPicks__items">
            {TopPickItems.map((item) => (
              <ProductCard key={item.productName} item={item} />
            ))}
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
}
