import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61um60VOoeL._SX3000_.jpg"
          alt="back-image"
        />

        <div className="home__row">
          <Product
            title="Gaming accessories"
            image={"https://i.ibb.co/XFy1z3m/Capture.png"}
          />

          <Product
            title="Shop By Category"
            image={"https://i.ibb.co/0DsMxY6/Capture.png"}
          />

          <Product
            title="Health & Personal Care"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
            }
          />
        </div>

        <div className="home__row">
          <Product
            title="Beauty picks"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
            }
          />
          <Product
            title="Get fit at home"
            image={
              "https://m.media-amazon.com/images/I/61MqdF2xPdL._AC_UL480_QL65_.jpg"
            }
          />
          <Product />
        </div>

        <div className="home__row">
          <Product
            title="Deals & Promotions"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
            }
          />
          <Product
            title="Easter basket stuffers"
            image={"https://i.ibb.co/NFbhLCr/Capture.png"}
          />
          <Product
            title="Electronics"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            }
          />
        </div>

        <div className="home__row">
          <Product
            title="New arrivals in Toys"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
            }
          />
          <Product
            title="For Your Fitness Needs"
            image={
              "https://i.ibb.co/98GkmrW/young-fitness-man-studio-7502-5008.jpg"
            }
          />
          <Product
            title="Shop activity trackers and smart watches"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
            }
          />
        </div>

        <div className="home__row">
          <Product
            title="Kindle E readers"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg"
            }
          />
          <Product
            title="Shop Laptops & Tablets"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            }
          />
          <Product
            title="Create with stip lights"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
