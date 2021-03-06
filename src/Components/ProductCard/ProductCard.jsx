import React from "react";
import "./style.scss";

// @components
import { Button } from "@material-ui/core";

// @cont3xt
import { useActiveSidebarDataLayerValue } from "../../Context/Sidebar/ActiveSidebarItem";

// @lazy component
const ProductCardSkeleton = React.lazy(() =>
  import("../ProductCardSkeleton/ProductCardSkeleton")
);

// @dev props from browseall page
export default function ProductCard(item) {
  const [{ active }, dispatch] = useActiveSidebarDataLayerValue();
  console.log(active);

  const {
    productName,
    productPrice,
    isOutOfStock,
    isFavorite,
    onSale,
    discount,
    isNew,
    productImage,
  } = item.item;

  const handleDispatch = () => {
    dispatch({
      type: "SET_ACTIVE_BAR",
      activeBar: "product-focused",
    });

    // @dev set product id for focused product
    sessionStorage.setItem("focused-product", "product id here");
  };

  return (
    <React.Suspense fallback={<ProductCardSkeleton />}>
      <div className="productCard">
        {/* section => product card image container */}
        <div className="productCard__imgContainer">
          <Button onClick={handleDispatch}>
            <img src={productImage} alt={productName} />
          </Button>

          <div
            className={`productCard__ticker ${isOutOfStock && "outOfStock"} ${
              isNew && "new"
            } ${onSale && "sale"}`}
          >
            {isOutOfStock && "Out of Stock"}
            {isNew && "New"}
            {onSale && "Sale"}
          </div>
        </div>

        {/* section => product description */}
        <div className="productCard__description">
          {/* section => product description => product name */}
          <div className="productCard__description__productName">
            <Button onClick={handleDispatch}>
              {productName.length >= 23
                ? `${productName.slice(0, 23)}...`
                : productName}
            </Button>
          </div>

          {/* section => product description => product price */}
          <div className="productCard__description__productPrice">
            <Button>
              <i
                className={`${
                  isFavorite ? "ri-heart-3-fill" : "ri-heart-3-line"
                }`}
              ></i>
            </Button>

            <div>
              <span className="discountedPrice">
                {discount.isDiscounted && `${discount.initialPrice} USDT`}
              </span>{" "}
              <b>{productPrice} USDT</b>
            </div>
          </div>
        </div>
      </div>
    </React.Suspense>
  );
}
