import React from "react";
import "../../style/HomePage.css";
import burger from "../../assets/homeImages/burger.png";
import pizza from "../../assets/homeImages/pizza.png";
import fries from "../../assets/homeImages/fries.png";
import miniburger from "../../assets/homeImages/miniburger.jpeg";
import card1 from "../../assets/homeImages/card1.png";
import card2 from "../../assets/homeImages/card2.jpeg";
import card3 from "../../assets/homeImages/card3.png";
import kfc from "../../assets/homeImages/kfc box.png";
import bigpizza from "../../assets/homeImages/big pizza.png";
import bigfries from "../../assets/homeImages/big fries.png";
import dublecheese from "../../assets/homeImages/dublecheese.jpg";
import margarita from "../../assets/homeImages/margarita.jpg";
import twistermenu from "../../assets/homeImages/Twistermenu.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();

  const sections = [
    {
      imgSrc: kfc,
      title: t("home.Menuthat"),
      description: t("home.Lorem ipsum5"),
    },
    {
      imgSrc: bigpizza,
      title: t("home.Yummy Papa"),
      description: t("home.Lorem ipsum6"),
    },
    {
      imgSrc: bigfries,
      title: t("home.DoyouLike"),
      description: t("home.Lorem ipsum7"),
    },
  ];

  return (
    <div className="allContainer">
      <div className="firstPart-headerContainer">
        <div className="firstPart-header">
          <div className="firstPart-leftSide">
            <div className="leftSide-info">
              <h1>{t("home.Our Food")}</h1>
              <p className="leftSide-text">{t("home.Lorem ipsum1")}</p>
            </div>

            <div className="regor">
              <Link to="/registerPage">
                <button className="register">{t("home.Register")}</button>
              </Link>
              <button className="order">{t("home.Order now")}</button>
            </div>
          </div>

          <div className="blackBackground-image">
            <img className="burger" src={burger} alt="" />

            <div className="animationContainer1">
              <figure className="animation-figure">
                <img src={pizza} alt="" />
              </figure>

              <p>{t("home.Pizza Hut")}</p>
            </div>

            <div className="animationContainer2">
              <figure className="animation-figure">
                <img src={fries} alt="" />
              </figure>

              <p>{t("home.French fries")}</p>
            </div>

            <div className="animationContainer3">
              <figure className="animation-figure">
                <img src={miniburger} alt="" />
              </figure>

              <p>{t("home.Cheesburger")}</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="features">{t("home.Features")}</h1>
      <div className="divFeaturesTxt">
        <div className="featurestXT">
          <p>{t("home.Lorem ipsum2")}</p>
        </div>
      </div>
      <div className="containerHome-card">
        <div className="homecard1">
          <img src={card1} alt="" />
          <h2>{t("home.Discount")}</h2>
          <p>{t("home.Lorem ipsum2,5")}</p>
        </div>

        <div className="homecard2">
          <img src={card2} alt="" />
          <h2>{t("home.Fresh")}</h2>
          <p>{t("home.Lorem ipsum3")}</p>
        </div>

        <div className="homecard3">
          <img src={card3} alt="" />
          <h2>{t("home.Fast")}</h2>
          <p>{t("home.Lorem ipsum4")}</p>
        </div>
      </div>

      {sections.map((section, index) => (
        <div
          className={`dinamicMain ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <div className="text">
            <h1>{section.title}</h1>
            <p>{section.description}</p>
          </div>
          <div className="image">
            <div className="image-wrapperHeader ">
              <figure>
                <img src={section.imgSrc} alt={section.title} />
              </figure>
            </div>
          </div>
        </div>
      ))}

      <div className="ourPopular">
        <div className="divPop">
          <h1 className="pop">{t("home.Popular")}</h1>
        </div>
      </div>
      <div className="mainDivPopTxt">
        <div className="divPopTxt">
          <p className="txt">{t("home.Lorem ipsum8")}</p>
        </div>
      </div>
      <div className="meal-cards">
        <div className="meal-cards1">
          <img src={dublecheese} alt="" />
          <h2>{t("home.Dubblechess")}</h2>
          <p>{t("home.Lorem ipsum9")}</p>
        </div>

        <div className="meal-cards2">
          <img src={margarita} alt="" />
          <h2>{t("home.Margarita")}</h2>
          <p>{t("home.Lorem ipsum10")}</p>
        </div>

        <div className="meal-cards3">
          <img src={twistermenu} alt="" />
          <h2>{t("home.Twister")}</h2>
          <p>{t("home.Lorem ipsum11")}</p>
        </div>
      </div>

      <div className="finishContainer">
        <div className="finish">
          <div className="son1img">
            <img src={pizza} alt="" />
          </div>
          <div className="end">
            <h1>{t("home.Discover")}</h1>
            <button>{t("homr.Explore")}</button>
          </div>
          <div className="sonimg">
            <img src={burger} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
