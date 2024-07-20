import React from 'react'
import "../../style/HomePage.css"
import burger from '../../assets/homeImages/burger.png'
import pizza from '../../assets/homeImages/pizza.png'
import fries from '../../assets/homeImages/fries.png'
import miniburger from '../../assets/homeImages/miniburger.jpeg'
import card1 from '../../assets/homeImages/card1.png'
import card2 from '../../assets/homeImages/card2.jpeg'
import card3 from '../../assets/homeImages/card3.png'
import kfc from '../../assets/homeImages/kfc pad.jpg'
import bigpizza from '../../assets/homeImages/pizzapad.jpg'
import bigfries from '../../assets/homeImages/fripad.png'
import dublecheese from '../../assets/homeImages/dublecheese.jpg'
import margarita from '../../assets/homeImages/margarita.jpg'
import twistermenu from '../../assets/homeImages/Twistermenu.jpg'

function Home() {
return (
    <div>

<div className="all"> 
<div className="all1">
    <div className="info">
        <h1>Our Food site makes it easy to find local food</h1>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>

    <div>
        <button className="register">Register</button>
        <button className="order">Order now</button>
    </div>

</div>
<div className="div1">
    <div className="div5">
        <img className="burger"src={burger} alt="" />   

        <div className="div2">
            <img src={pizza} alt="" />
            <p>Pizza Hut 
            Yummy ...</p>
        </div>

        <div className="div3">
            <img src={fries} alt="" />
            <p>French Fries Yummy ...</p>
        </div>

        <div className="div4">
            <img src={miniburger} alt="" />
            <p>Cheesburger
            Yummy ...</p>
        </div>
    </div>
</div>
</div> 

<h1 className="h1">Features</h1>
<h3 className="h3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</h3>



<div className="container">
    <div className="card1">
        <img src={card1} alt="" />
        <h2>Discount Boucher</h2>
        <p>Lorem ipsum is placeholder  commonly used in the graphic </p>
    </div>

    <div className="card2">
        <img src={card2} alt="" />
        <h2>Fresh healthy Food</h2>
        <p>Lorem ipsum is placeholder  commonly used in the graphic </p>
    </div>

    
    <div className="card3" >
        <img src={card3} alt="" />
        <h2>Fast Home Delivery</h2>
        <p>Lorem ipsum is placeholder  commonly used in the graphic </p>
    </div>

</div>

<div className="main1">
    <div className="txt1">
        <h1>Menu That Always Make You Fall In Love</h1>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
        <div><img src={kfc} alt="" /></div>
</div>

<div className="main2">
    <div><img src={bigpizza} alt="" /></div>
    <div className="txt2">
        <h1>Yummy Always Papa John’s Pizza.Agree?</h1>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>
</div>

<div className="main3">
    <div className="txt3">
        <h1>Do You Like French Fries?
        Mmm...</h1>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
    </div>   
        <div className="imgcontainer">
            <img className="fre" src={bigfries} alt="" />
        </div>
</div>


    <h1 className="pop">Our Popular Update New Foods</h1>
    <p  className="txt">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>


    <div className="cards">

    <div className="cards1" >
        <img src={dublecheese} alt="" />
        <h2>Dubble Chees</h2>
        <p>Lorem ipsum is placeholder  commonly used in the graphic </p>
    </div>

    <div className="cards2" >
        <img src={margarita} alt="" />
        <h2>Margarita</h2>
        <p>Lorem ipsum is placeholder  commonly used in the graphic </p>
    </div>

    <div className="cards3" >
        <img src={twistermenu} alt="" />
        <h2>Twister Menu</h2>
        <p>Lorem ipsum is placeholder  commonly used in the graphic </p>
    </div>
    </div>

    </div>
)
}

export default Home
