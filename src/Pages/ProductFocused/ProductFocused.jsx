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
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";

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
              to="/getting-started/installation/"
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
                  <h1>2.5/5</h1>
                  <Rating name="read-only" value={value} readOnly />
                  <div className="productFocused__main__descriptionAndReviews__content__rating__detail__total__reviews">
                    (22 Reviews)
                  </div>
                </div>
                <div className="productFocused__main__descriptionAndReviews__content__rating__detail__star__rating">
                  <div className="productFocused__main__descriptionAndReviews__content__rating__detail__star__rating__five__star">
                    <div className="title">5 Star</div>
                    <div>
                      <LinearProgress variant="determinate" value="25" />
                    </div>
                    <div>6.36k</div>
                  </div>
                  <div className="productFocused__main__descriptionAndReviews__content__rating__detail__star__rating__four__star">
                    <div className="title">4 Star</div>
                    <div>
                      <LinearProgress variant="determinate" value="25" />
                    </div>
                    <div>6.36k</div>
                  </div>
                  <div className="productFocused__main__descriptionAndReviews__content__rating__detail__star__rating__three__star">
                    <div className="title">3 Star</div>
                    <div>
                      <LinearProgress variant="determinate" value="25" />
                    </div>
                    <div>6.36k</div>
                  </div>
                  <div className="productFocused__main__descriptionAndReviews__content__rating__detail__star__rating__two__star">
                    <div className="title">2 Star</div>
                    <div>
                      <LinearProgress variant="determinate" value="25" />
                    </div>
                    <div>6.36k</div>
                  </div>
                  <div className="productFocused__main__descriptionAndReviews__content__rating__detail__star__rating__one__star">
                    <div className="title">1 Star</div>
                    <div>
                      <LinearProgress variant="determinate" value="25" />
                    </div>
                    <div>6.36k</div>
                  </div>
                </div>

                <div className="productFocused__main__descriptionAndReviews__content__rating__detail__write__review">
                  <Button onClick={handleCollapse}>
                    <i className="ri-edit-2-line"></i>
                    <span>Write Your Review</span>
                  </Button>
                </div>
              </div>

              <Collapse
                className="productFocused__main__descriptionAndReviews__content__collapsed__form"
                in={checked}
              >
                <div className="productFocused__main__descriptionAndReviews__content__collapsed__form__content">
                  <h3>Add Review</h3>
                  <div className="productFocused__main__descriptionAndReviews__content__collapsed__form__rating">
                    <p>Your rating on this product</p>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>
                  <div>
                    <textarea placeholder="Your Review*" rows="5"></textarea>
                    <input type="text" placeholder="Your Name*" />
                    <input type="email" placeholder="Your Email*" />
                  </div>
                  <div className="productFocused__main__descriptionAndReviews__content__collapsed__form__rateButtons">
                    <Button className="productFocused__main__descriptionAndReviews__content__collapsed__form__rateButtons__cancelButton">
                      Cancel
                    </Button>
                    <Button className="productFocused__main__descriptionAndReviews__content__collapsed__form__rateButtons__postButton">
                      Post Review
                    </Button>
                  </div>
                </div>
              </Collapse>

              {/* reviews */}
              <div className="productFocused__main__descriptionAndReviews__content__reviews">
                <div className="productFocused__main__descriptionAndReviews__content__reviews__user">
                  <img src="https://images.unsplash.com/photo-1553976468-dcd9082bcd28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80" alt="user image" />
                  <div className="userFullName">Sangya Sherpa</div>
                  <div>21st Oct, 2021</div>
                </div>

                <div className="productFocused__main__descriptionAndReviews__content__reviews__content">
                  <Rating value={2}/>
                  <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni est dignissimos blanditiis omnis inventore assumenda culpa non quibusdam dolores optio, voluptatibus velit nam dicta! Neque, debitis esse. Provident, repudiandae qui!</div>
                  <Button><i className="ri-thumb-up-line"></i> <span>Thanks (7.69k)</span></Button>
                </div>
              </div>
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  );
}
