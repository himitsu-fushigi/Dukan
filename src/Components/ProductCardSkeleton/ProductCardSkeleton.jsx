import React from "react";
import "./style.scss";

// @components
import { Skeleton } from "@mui/material";

export default function ProductCardSkeleton() {
  return (
    <div className="productCardSkeleton">
      {/* section => product image */}
      <Skeleton
        animation="wave"
        className="productCardSkeleton__imageContainer"
        variant="rectangular"
      />

      <div className="productCardSkeleton__productDesc">
          {/* section => productCard__ticker */}
      <Skeleton
        animation="wave"
        variant="text"
        className="productCardSkeleton__productTicker"
      />

      {/* section => product description */}
      <div className="productCardSkeleton__productDescription">
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="text"  className="price"/>
      </div>
      </div>
    </div>
  );
}
