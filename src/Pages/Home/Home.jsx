import React from "react";
import "./style.scss";

// @components
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Button } from "@material-ui/core";
import ProductFilters from "../../Components/ProductFilters/ProductFilters";

// @utils
import TopPickItems from "../../Utils/Home/TopPickProducts.json";
import ToysAndGames from "../../Utils/Home/ToysAndGames.json";
import Vehicles from "../../Utils/Home/Vehicles.json";
import Clothing from "../../Utils/Home/Clothing.json";
import Electronics from "../../Utils/Home/Electronics.json";
import BeautyAndHealth from "../../Utils/Home/BeautyAndHealth.json";
import Computers from "../../Utils/Home/Computers.json";
import Family from "../../Utils/Home/Family.json";
import ProductCard from "../../Components/ProductCard/ProductCard";

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

          {/* section => top picks => items */}
          <div className="home__browseAll__topPicks__items">
            {TopPickItems.map((item) => (
                  <ProductCard item={item} key={item.productName}/>
            ))}
          </div>
        </div>

        <hr />

        {/* section => toys & games */}
        <div className="home__browseAll__ToysAndGames">
          {/* section => toys & games => title */}
          <div className="home__browseAll__ToysAndGames__title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3>Toys & Games</h3>{" "}
              <i
                style={{ marginLeft: "5px", fontSize: "25px" }}
                className="ri-gamepad-line"
              ></i>
            </div>
          </div>

          {/* section => toys & games => items */}
          <div className="home__browseAll__ToysAndGames__items">
            {ToysAndGames.map((item) => (
              <ProductCard key={item.productName} item={item} />
            ))}
          </div>
        </div>

        <hr />

        {/* section => vehicles */}
        <div className="home__browseAll__vehicles">
          {/* section => vehicles => title */}
          <div className="home__browseAll__vehicles__title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3>Vehicles</h3>{" "}
              <i
                style={{ marginLeft: "5px", fontSize: "25px" }}
                className="ri-bike-line"
              ></i>
            </div>
          </div>

          {/* section => vehicles => items */}
          <div className="home__browseAll__vehicles__items">
            {Vehicles.map((item) => (
              <ProductCard key={item.productName} item={item} />
            ))}
          </div>
        </div>

        <hr />

        {/* section => clothing */}
        <div className="home__browseAll__clothing">
          {/* section => clothing => title */}
          <div className="home__browseAll__clothing__title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3>Clothing</h3>{" "}
              <i
                style={{ marginLeft: "5px", fontSize: "25px" }}
                className="ri-shirt-line"
              ></i>
            </div>
          </div>

          {/* section => clothing => items */}
          <div className="home__browseAll__clothing__items">
            {Clothing.map((item) => (
              <ProductCard key={item.productName} item={item} />
            ))}
          </div>
        </div>

        <hr />

        {/* section => electronics */}
        <div className="home__browseAll__electronics">
          {/* section => electronics => title */}
          <div className="home__browseAll__electronics__title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3>Electronics</h3>{" "}
              <i
                style={{ marginLeft: "5px", fontSize: "25px" }}
                className="ri-calculator-line"
              ></i>
            </div>
          </div>

          {/* section => electronics => items */}
          <div className="home__browseAll__electronics__items">
            {Electronics.map((item) => (
              <ProductCard key={item.productName} item={item} />
            ))}
          </div>
        </div>

        <hr />

        {/* section => beauty & health */}
        <div className="home__browseAll__beautyAndHealth">
          {/* section => beauty & health => title */}
          <div className="home__browseAll__beautyAndHealth__title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3>Beauty & Health</h3>{" "}
              <i
                style={{ marginLeft: "5px", fontSize: "25px" }}
                className="ri-magic-line"
              ></i>
            </div>
          </div>

          {/* section => beauty & health => items */}
          <div className="home__browseAll__beautyAndHealth__items">
            {BeautyAndHealth.map((item) => (
              <ProductCard key={item.productName} item={item} />
            ))}
          </div>
        </div>

        <hr />

        {/* section => Computer And Peripherals */}
        <div className="home__browseAll__computerAndPeripherals">
          {/* section => Computer And Peripherals => title */}
          <div className="home__browseAll__computerAndPeripherals__title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3>Computer And Peripherals</h3>{" "}
              <i
                style={{ marginLeft: "5px", fontSize: "25px" }}
                className="ri-macbook-line"
              ></i>
            </div>
          </div>

          {/* section => Computer And Peripherals => items */}
          <div className="home__browseAll__computerAndPeripherals__items">
            {Computers.map((item) => (
              <ProductCard key={item.productName} item={item} />
            ))}
          </div>
        </div>

        <hr />

        {/* section => Family */}
        <div className="home__browseAll__family">
          {/* section => Family => title */}
          <div className="home__browseAll__family__title">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3>Family</h3>{" "}
              <i
                style={{ marginLeft: "5px", fontSize: "25px" }}
                className="ri-home-heart-line"
              ></i>
            </div>
          </div>

          {/* section => Family => items */}
          <div className="home__browseAll__family__items">
            {Family.map((item) => (
              <ProductCard key={item.productName} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
