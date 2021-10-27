import React from "react";
import "./style.scss";

// @components
import Sidebar from "../../Components/Sidebar/Sidebar";
import CheckoutButton from "../../Components/CheckoutButton/CheckoutButton";

// @packages
import { Breadcrumbs, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Collapse from "@mui/material/Collapse";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductFocused() {
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCollapse = () => {
    setChecked((prev) => !prev);
  };

  const DescriptionMD = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur placeat porro harum unde et error beatae molestiae sit, assumenda eveniet repudiandae, libero vero ipsum. Mollitia similique tenetur autem quaerat. 

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, perspiciatis iusto cum similique explicabo ab saepe qui voluptates accusamus, hic, laborum blanditiis? Quibusdam delectus repellendus non labore illum nulla dolorum.

#### Specifications
- Lorem Ipsum Dolor sit amet
- Lorem Ipsum Dolor sit amet
- Lorem Ipsum Dolor sit amet
- Lorem Ipsum Dolor sit amet
  `;
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
          <img
            src="https://minimals.cc/static/mock-images/products/product_1.jpg"
            alt=""
          />
          <div className="productFocused__main__productDetails__content"></div>
        </div>

        {/* @section banner */}
        <div className="productFocused__main__banner">
          <div className="productFocused__main__banner__item">
            <div className="productFocused__main__banner__item__icon">
              <i className="ri-star-fill"></i>
            </div>
            <div className="productFocused__main__banner__item__title">
              100% Original
            </div>
            <div className="productFocused__main__banner__item__content">
              Lorem ipsum dolor sit amet consequer los noramles
            </div>
          </div>
          <div className="productFocused__main__banner__item">
            <div className="productFocused__main__banner__item__icon">
              <i className="ri-time-fill"></i>
            </div>
            <div className="productFocused__main__banner__item__title">
              10 Day Replacement
            </div>
            <div className="productFocused__main__banner__item__content">
              Lorem ipsum dolor sit amet consequer los noramles
            </div>
          </div>
          <div className="productFocused__main__banner__item">
            <div className="productFocused__main__banner__item__icon">
              <i className="ri-shield-cross-fill"></i>
            </div>
            <div className="productFocused__main__banner__item__title">
              Year Warranty
            </div>
            <div className="productFocused__main__banner__item__content">
              Lorem ipsum dolor sit amet consequer los noramles
            </div>
          </div>
        </div>

        {/* @section description and reviews */}
        <div className="productFocused__main__descriptionAndReviews">
          <Box sx={{ width: "100%" }}>
            <Box
              className="productFocused__main__descriptionAndReviews__titleBar"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  style={{ textTransform: "initial" }}
                  label="Description"
                  {...a11yProps(0)}
                />
                <Tab
                  style={{ textTransform: "initial" }}
                  label="Reviews(8)"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <TabPanel
              className="productFocused__main__descriptionAndReviews__content"
              value={value}
              index={0}
            >
              <MarkdownPreview source={DescriptionMD} />
            </TabPanel>
            <TabPanel
              className="productFocused__main__descriptionAndReviews__content"
              value={value}
              index={1}
            >
              <div className="productFocused__main__descriptionAndReviews__content__rating__detail">
                <div className="productFocused__main__descriptionAndReviews__content__rating__detail__average__rating">
                  <h3>Average Rating</h3>
                  <h1>
                    2.5/5
                  </h1>

                </div>
                <div className="productFocused__main__descriptionAndReviews__content__rating__detail__star__rating">
                  1
                </div>

                <div className="productFocused__main__descriptionAndReviews__content__rating__detail__write__review">
                  1
                </div>
              </div>
              <Collapse in={checked}>Write Review</Collapse>
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  );
}
