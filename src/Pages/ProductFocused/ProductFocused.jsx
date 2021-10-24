import React from 'react'
import './style.scss'

// @components
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import CheckoutButton from "../../Components/CheckoutButton/CheckoutButton";

export default function ProductFocused() {
    return (
        <div className="productFocused">
            <CheckoutButton/>
            <Sidebar/>
        </div>
    )
}
