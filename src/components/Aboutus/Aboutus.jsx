import React from 'react'
import '../../style/aboutus.css'
import hamburger from '../../assets/aboutusImages/hamburger.svg';
import pizza from '../../assets/aboutusImages/pizza.svg';
import soup from '../../assets/aboutusImages/soup.svg';
import coffee from '../../assets/aboutusImages/coffee.svg';


function About() {
  return (
        <div className="about">
          <div className="about-container">
            <div className="about-us">
              <h1>About Us</h1>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
            </div>
            <div className="about-background">
              <div className="about-menu">
                {/* <div className="about-hamburger"> */}
                  <img className='hamburger' src={hamburger} alt="Hamburger" />
                  {/* </div> */}
                </div>
                {/* <div className="about-pizza"> */}
                  <img className='pizza' src={pizza} alt="Sausage Pizza" />
                {/* </div> */}
                {/* <div className="about-soup"> */}
                  <img className='soup' src={soup} alt="Tomato Soup" />
                {/* </div> */}
                {/* <div className="about-coffee"> */}
                  <img className='coffee' src={coffee} alt="Papa Coffee" />
                {/* </div> */}
              </div>
            </div>
          </div>
      );
    }
    
  

export default About;