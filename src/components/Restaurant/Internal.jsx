import React, { useState } from 'react';
import "../../style/restaurant_internal.css"
import Brand from '../../assets/restaurant_images/Brand.jpg';
import trash from '../../assets/restaurant_images/trash.jpg';
import basket from '../../assets/restaurant_images/basket.jpg';
import pizza from '../../assets/restaurant_images/Pizza.jpg';
import empty from '../../assets/restaurant_images/empty.jpg';
import emptyIcon from '../../assets/restaurant_images/iconbasket.jpg'
import { Link } from 'react-router-dom';

const productList = [
  { id: 1, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 2, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 3, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 4, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 5, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 6, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 }
];

function Internal() {
  const [basketItems, setBasketItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToBasket = (product) => {
    const existingProduct = basketItems.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedBasketItems = basketItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setBasketItems(updatedBasketItems);
    } else {
      setBasketItems([...basketItems, { ...product, quantity: 1 }]);
    }
    setTotalPrice(totalPrice + product.price);
  };

  const handleRemoveFromBasket = (index, removeAll = false) => {
    const product = basketItems[index];
    const newBasketItems = [...basketItems];

    if (removeAll || product.quantity === 1) {
      newBasketItems.splice(index, 1);
      setTotalPrice(Math.max(0, totalPrice - product.price * product.quantity));
    } else {
      newBasketItems[index] = { ...product, quantity: product.quantity - 1 };
      setTotalPrice(Math.max(0, totalPrice - product.price));
    }

    setBasketItems(newBasketItems);
  };

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
            <p>pizza, drink, hotdog, sandwich, roll</p>
          </div>
          <div className='buttons'>
            <button className='delbtn'> $5 Delivery</button>
            <button className='backbtn'> <Link to={'/restaurantMain'}> Go Back</Link></button>
          </div>
        </div>
      </div>
      
      <div className="restaurants_user">
        <div className='products'>
          <div className='restaurantsContainer'>
            <h3>Products</h3>
            {productList.map((product, index) => (
              <div key={index} className='productItem'>
                <div className='productImg'>
                  <img src={product.image} alt="Product" />
                </div>
                <div className='restaurantsInfo'>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                </div>
                <div className='price'>
                  <span>From <strong>${product.price.toFixed(2)}</strong></span>
                  <button className='circlebtn' onClick={() => handleAddToBasket(product)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="restaurants_basket">
                                                                               {/* Full Basket part  */}
          {basketItems.length > 0 && (
            <div className='restaurants_nav'>
              <div className='bskt_image'>
                <img src={basket} alt="Basket" />
              </div>
              <div className='bskt_num'>
                <p><span>{basketItems.reduce((sum, item) => sum + item.quantity, 0)}</span> items</p>
              </div>
            </div>
          )}

          {basketItems.length > 0 ? (
            <div className='restaurants_common'>                                                                       
              {basketItems.map((item, index) => (
                <div className='restaurants_text' key={index}>
                  <div className='restaurants_image'>
                    <img src={item.image} alt="Product" />
                  </div>
                  <div className='restaurants_info'>
                    <p>{item.name}</p>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className='restaurants_price'>
                    <div className='trash' onClick={() => handleRemoveFromBasket(index, true)}>
                      <img src={trash} alt="Remove" />
                    </div>
                    <div className='quantity'>
                      <span className='plus' onClick={() => handleAddToBasket(item)}>+</span>
                      <p>{item.quantity}</p>
                      <span onClick={() => handleRemoveFromBasket(index)}>—</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className='check_btn'>
                <p>Checkout</p>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          ) : (                                                                   /* Empty Basket part */
            <div className="emptyBasket">
              <div className="emptyNav">
                <img src={emptyIcon} alt="Empty Icon" />
                <span>0 items</span>
              </div>
              <div className="emptyImage">
                <img src={empty} alt="Empty" />
              </div>
              <div className="emptydescription">
                <p>Oops! Basket empty</p>
              </div>
              <div className='emptycheck_btn'>
                <p>Checkout</p>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Internal;
