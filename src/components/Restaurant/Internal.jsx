import React from 'react';
import "../../style/restaurant_internal.css"
import Brand from '../../assets/restaurant_images/Brand.jpg';
import pizza from '../../assets/restaurant_images/Pizza.jpg';
import { Link } from 'react-router-dom';


const productList = [
  { image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce' },
  { image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce' },
  { image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce' }
];

function Internal() {
  return (
    <div>
      <div className='profile'>
        <div className='profileImg'>
          <img src={Brand} alt="Brand" />
        </div>
        <div className='information'>
          <div className='restaurantName'>
            <h3>Papa John’s Pizza Restaurant</h3>
            <p>19 Nizami street, Sabail, Baku</p>
          </div>
          <div className='productName'>
            <h4>Cuisine</h4>
            <p>pizza, drink, hotdog, sendvich, roll</p>
          </div>
          <div className='buttons'>
            <button className='delbtn'> $5 Delivery</button>
            <button className='backbtn'> <Link to={'/'}> Go Back</Link></button>
          </div>
        </div>
      </div>

      <div className='products'>
        <div className='container'>
          <h3>Products</h3>
          <div className='productList'>
            {productList.map((product, index) => (
              <div key={index} className='productItem'>
                <div className='productImg'>
                  <img src={product.image} alt="Product" />
                </div>
                <div className='info'>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                </div>
                <div className='price'>
                  <span>From <strong>$7.90</strong></span>
                  <div className='circle'> + </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internal;
