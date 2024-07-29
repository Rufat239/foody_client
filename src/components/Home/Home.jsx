import React from "react";
import "../../style/HomePage.css";
import burger from "../../assets/homeImages/burger.png";
import pizza from "../../assets/homeImages/pizza.png";
import fries from "../../assets/homeImages/fries.png";
import miniburger from "../../assets/homeImages/miniburger.jpeg";
import card1 from "../../assets/homeImages/card1.png";
import card2 from "../../assets/homeImages/card2.jpeg";
import card3 from "../../assets/homeImages/card3.png";
import kfc from "../../assets/homeImages/kfc pad.jpg";
import bigpizza from "../../assets/homeImages/pizzapad.jpg";
import bigfries from "../../assets/homeImages/fripad.png";
import dublecheese from "../../assets/homeImages/dublecheese.jpg";
import margarita from "../../assets/homeImages/margarita.jpg";
import twistermenu from "../../assets/homeImages/Twistermenu.jpg";

function Home() {

  const sections = [
    {
      imgSrc: kfc,
      title: "Menu That Always Make You Fall In Love",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      imgSrc: bigpizza,
      title: "Yummy Always Papa John’s Pizza. Agree?",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      imgSrc: bigfries,
      title: "Do You Like French Fries? Mmm...",
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
  ];

  return (
    <div className="allContainer">
      <div className="firstPart-headerContainer">
      <div className="firstPart-header">
        <div className="firstPart-leftSide">
          <div className="leftSide-info"> 
            <h1>Our Food site makes it easy to find local food</h1>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>

          <div className="regor">
            <button className="register">Register</button>
            <button className="order">Order now</button>
          </div>
        </div>
        {/* <div className="div1"> */}
          <div className="blackBackground-image">
            <img className="burger" src={burger} alt="" />

            <div className="animationContainer1">
              <figure className="animation-figure">
              <img src={pizza} alt="" />
              </figure>
             
              <p>Pizza Hut Yummy ...</p>
            </div>

            <div className="animationContainer2">
              <figure className="animation-figure">
              <img src={fries} alt="" />
              </figure>
              
              <p>French Fries Yummy ...</p>
            </div>

            <div className="animationContainer3">
              <figure className="animation-figure">
              <img src={miniburger} alt="" />
              </figure>
              
              <p>Cheesburger Yummy ...</p>
            </div>
          </div>
        {/* </div> */}
      </div>
      </div>
      


      <h1 className="features">Features</h1>
      <div className="divFeaturesTxt">
        <div className="featurestXT">
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
      </div>
      <div className="containerHome-card">
        <div className="homecard1">
          <img src={card1} alt="" />
          <h2>Discount Boucher</h2>
          <p>Lorem ipsum is placeholder commonly used in the graphic </p>
        </div>

        <div className="homecard2">
          <img src={card2} alt="" />
          <h2>Fresh healthy Food</h2>
          <p>Lorem ipsum is placeholder commonly used in the graphic </p>
        </div>

        <div className="homecard3">
          <img src={card3} alt="" />
          <h2>Fast Home Delivery</h2>
          <p>Lorem ipsum is placeholder commonly used in the graphic </p>
        </div>
      </div>

      {sections.map((section, index) => (
        <div className={`main${index + 1}`} key={index}>
          {index % 2 === 0 ? (
            <>
              <div className={`txt${index + 1}`}>
                <h1>{section.title}</h1>
                <p>{section.description}</p>
              </div>
              <div>
                <img src={section.imgSrc} alt={section.title} />
              </div>
            </>
          ) : (
            <>
              <div>
                <img src={section.imgSrc} alt={section.title} />
              </div>
              <div className={`txt${index + 1}`}>
                <h1>{section.title}</h1>
                <p>{section.description}</p>
              </div>
            </>
          )}
        </div>
      ))}

      <div className="ourPopular">
        <div className="divPop">
          <h1 className="pop">Our Popular Update New Foods</h1>
        </div>
      </div>
      <div className="mainDivPopTxt">
        <div className="divPopTxt">
          <p className="txt">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="cards1">
          <img src={dublecheese} alt="" />
          <h2>Dubble Chees</h2>
          <p>Lorem ipsum is placeholder commonly used in the graphic </p>
        </div>

        <div className="cards2">
          <img src={margarita} alt="" />
          <h2>Margarita</h2>
          <p>Lorem ipsum is placeholder commonly used in the graphic </p>
        </div>

        <div className="cards3">
          <img src={twistermenu} alt="" />
          <h2>Twister Menu</h2>
          <p>Lorem ipsum is placeholder commonly used in the graphic </p>
        </div>
      </div>

      <div className="finish">
        <div className="son1img">
          <img src={pizza} alt="" />
        </div>
        <div className="end">
          <h1>Discover Restaurants Near From you</h1>
          <button>Explore now</button>
        </div>
        <div className="sonimg">
          <img src={burger} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
