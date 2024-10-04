import React, { useEffect, useState } from 'react';
import "../../style/restaurant_internal.css";
import Brand from '../../assets/restaurant_images/brand2.jpg';
import trash from '../../assets/userBasket/deleteIcon.svg';
import basket from '../../assets/userBasket/redBasket.png';
import whiteBasket from '../../assets/restaurant_images/shopping_basket.svg';
import BigredBasket from '../../assets/restaurant_images/redbigBasket.svg';
import pizza from '../../assets/restaurant_images/Pizza.jpg';
import empty from '../../assets/userBasket/emptyBasket.svg';
import emptyIcon from '../../assets/userBasket/iconBasket.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, increaseQuantity, removeFromBasket } from '../Redux/actions/basketActions';
import axios from 'axios';

function Internal() {
  const dispatch = useDispatch();
  const location = useLocation();
  const restaurant = location.state.restaurant;
  const basketItems = useSelector(state => state.basket.basketItems);
  const reduxTotalPrice = useSelector(state => state.basket.totalPrice);
  const navigate = useNavigate();
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [productList, setProductList] = useState([]);
  const [localTotalPrice, setLocalTotalPrice] = useState(0);


  const itemQuantity = basketItems.reduce((sum, item) => sum + item.quantity, 0);
  const itemText = itemQuantity === 1 || itemQuantity === 0 ? "item" : "items";


  useEffect(() => {
    const getProducts = async () => {
      const productUrl = 'https://test-foody-admin-default-rtdb.firebaseio.com/products.json';
      try {
        const response = await axios.get(productUrl);
        const data = response.data;
        const productsArray = Object.values(data);
        const filteredProducts = productsArray
          .filter((product) => product.restaurant && product.restaurant.trim() === restaurant.name.trim())
          .map((product, i) => {
            return {
              id: i,
              name: product.name,
              price: product.price,
              restaurant: product.restaurant,
              image: product.imageUrl,
              description: product.description,
            };
          });

        setProductList(filteredProducts);
        console.log(filteredProducts, "array")
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [restaurant.name]);





  const toggleBasket = () => {
    setIsBasketOpen(prevState => !prevState);
  };

  const handleAddToBasket = (product) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      dispatch(addToBasket(product));

    } else {
      navigate('/loginPage');
    }
  };

  return (
    <div className='internalMain'>
      {/* Restaurant Area */}
      <div className='internal-res-container'>
        <div className='internal-res-img'>
          <img src={restaurant.url} alt="Brand" />
        </div>
        <div className='information'>
          <div className='restaurantName'>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
          </div>
          <div className="restaurantsbutton">
            <div className='cuisine-name-res'>
              <h4>Cuisine</h4>
              <p>{restaurant.cuisine}</p>
            </div>
            <div className='delivery-res-buttons'>
              <button className='delbtn'> ${restaurant.deliveryPrice} Delivery</button>
              <button className='backbtn'> <Link to={'/restaurantMain'}> Go Back</Link></button>
            </div>
          </div>
        </div>
      </div>

      {/* Basket Area */}
      <div className="restaurants_user">
        <div className='restaurantsContainer'>
          <div className="productHead">
            <h3>Products</h3>
          </div>
          <div className="restaurantProduct">
            {productList.map((product, index) => (
              <div key={index} className='productItem'>
                <div className='productImg'>
                  <img src={product.image} />
                </div>
                <div className='restaurantsInfo'>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                </div>
                <div className='price'>
                  <span>From </span>
                  <p>${product.price}</p>
                  <button className='circlebtn' onClick={() => handleAddToBasket(product)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Basket Area */}
        <div className="restaurants_basket">
          {basketItems.length > 0 && (
            <div className='restaurants_nav'>
              <div className='bskt_image'>
                <img src={basket} alt="Basket" />
              </div>
              <div className='bskt_num'>
                <p><span>{basketItems.reduce((sum, item) => sum + item.quantity, 0)}</span> {itemText}</p>
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
                    <div className='trash' onClick={() => dispatch(removeFromBasket(index, true))}>
                      <img src={trash} alt="Remove" />
                    </div>
                    <div className='quantity'>
                      <span className='plus' onClick={() => dispatch(increaseQuantity(item))}>+</span>
                      <p>{item.quantity}</p>
                      <span onClick={() => dispatch(removeFromBasket(index))}>—</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="emptyBasket">
              <div className="emptyNav">
                <img src={emptyIcon} alt="Empty Icon" />
                <span>0 item</span>
              </div>
              <div className="emptydescription">
                <div className="emptyImage">
                  <img src={empty} alt="Empty" />
                </div>
                <h2 className='emptydescription1'>Opps!</h2>
                <h2 className='emptydescription2'>Basket empty</h2>
              </div>
              <div className='emptycheckout'>
                <button className='emptycheckBtn' >
                  <p>Checkout</p>
                  <span>$ 0.00</span>
                </button>
              </div>
            </div>
          )}
          {basketItems.length > 0 && (
            <div className="checkRedArea">
              <Link to={'/checkoutPage'}>
                <div className='check_btn'>
                  <button className='checkRedbtn'>
                    <p className='checkP'>Checkout</p>
                    <span className='checkS'>${reduxTotalPrice.toFixed(2)}</span>
                  </button>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Responsive Basket */}
      <div className="responsivBasketMain">
        {!isBasketOpen ? (
          <button className='responsivItem' onClick={toggleBasket}>
            <div className="itemImage">
              <img src={whiteBasket} />
            </div>
            <p><span>{basketItems.reduce((sum, item) => sum + item.quantity, 0)}</span> items</p>
            <span className='checkR'>${basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
          </button>
        ) : (
          <div className="responsivProdcut1">
            <div className="responsivDelete">
              <button onClick={toggleBasket}>&#10005;</button>
            </div>
            {basketItems.length > 0 ? (
              basketItems.map((item, index) => (
                <div key={item.id} className="responsivBasket">
                  <div className="responsivBasketList">
                    <div className='deleteimg' onClick={() => dispatch(removeFromBasket(item, true))}>
                      <img src={trash} alt="Remove" />
                    </div>
                    <div className="responsivlist">
                      <div className="responsivImage">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="responsivInfo">
                        <div className='resp-item-quantity'>
                          <p>{item.name}</p>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div className='quantity'>
                          <span className='plus' onClick={() => dispatch(increaseQuantity(item))}>+</span>
                          <p>{item.quantity}</p>
                          <span onClick={() => dispatch(removeFromBasket(index))}>—</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='empty-basket-resp'>
                <img src={BigredBasket} alt="" />
                <p>Oops! </p>
                <p>Basket empty</p>
              </div>
            )}
            <div className="responsivCheckout">
              <Link to={'/checkoutPage'}>
                <button className='checkRedbtn' disabled={basketItems.length === 0}>
                  <p className='checkP'>Checkout</p>
                  <span className='checkS'>${basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default Internal;
