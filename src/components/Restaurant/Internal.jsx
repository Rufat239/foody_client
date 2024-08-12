
import React from 'react';
import "../../style/restaurant_internal.css";
import Brand from '../../assets/restaurant_images/brand2.jpg';
import trash from '../../assets/userBasket/deleteIcon.svg';
import basket from '../../assets/userBasket/redBasket.png';
import whiteBasket from '../../assets/restaurant_images/shopping_basket.svg';
import BigredBasket from '../../assets/restaurant_images/redbigBasket.svg';
import pizza from '../../assets/restaurant_images/Pizza.jpg';
import empty from '../../assets/userBasket/emptyBasket.svg';
import emptyIcon from '../../assets/userBasket/iconBasket.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, increaseQuantity, removeFromBasket } from '../Redux/actions/basketActions';

const productList = [
  { id: 1, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 2, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 3, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 4, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 5, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 6, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 7, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 8, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 },
  { id: 9, image: pizza, name: 'Papa John’s Pizza Restaurant', description: 'Prepared with a patty, a slice of cheese and special sauce', price: 7.90 }
];

function Internal() {
  const dispatch = useDispatch();
  const basketItems = useSelector(state => state.basket.basketItems);
  const totalPrice = useSelector(state => state.basket.totalPrice);
  const navigate = useNavigate();
  const [isBasketOpen, setIsBasketOpen] = React.useState(false);

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
      <div className='profile'>
        <div className='profileImg'>
          <img src={Brand} alt="Brand" />
        </div>
        <div className='information'>
          <div className='restaurantName'>
            <h3>Papa John’s Pizza Restaurant</h3>
            <p>19 Nizami street, Sabail, Baku</p>
          </div>
          <div className="restaurantsbutton">
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
      </div>

                                                                                     {/* Basket Area*/}
      <div className="restaurants_user">
        <div className='restaurantsContainer'>
          <div className="productHead">
            <h3>Products</h3>
          </div>
          <div className="restaurantProduct">
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
                  <span>From </span>
                  <p>${product.price.toFixed(2)}</p>
                  <button className='circlebtn' onClick={() => handleAddToBasket(product)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>

                                                                                  {/* Basket Area*/}
        <div className="restaurants_basket">
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
                <span>0 items</span>
              </div>
              <div className="emptydescription">
                <div className="emptyImage">
                  <img src={empty} alt="Empty" />
                </div>
                <h2 className='emptydescription1'>Opps!</h2>
                <h2 className='emptydescription2'>Basket empty</h2>
              </div>
              <div className='emptycheckout'>
                <button className='emptycheckBtn'>
                  <p>Checkout</p>
                  <span>$0.00</span>
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
                    <span className='checkS'>${totalPrice.toFixed(2)}</span>
                  </button>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

                                                                                  {/* Responsiv Basket*/}
  <div className="responsivBasketMain">
  {!isBasketOpen ? (
    <button className='responsivItem' onClick={toggleBasket}>
      <div className="itemImage">
        <img src={whiteBasket} />
      </div>
      <p><span>{basketItems.reduce((sum, item) => sum + item.quantity, 0)}</span> items</p>
      <span className='checkR'>${totalPrice.toFixed(2)}</span>
    </button>
  ) : (
    <div className="responsivProdcut1">
      <div className="responsivDelete">
        <button onClick={toggleBasket}>&#10005;</button>
      </div>
      {basketItems.length > 0 ? (
        basketItems.map((item) => (
          <div key={item.id} className="responsivBasket">
            <div className="responsivBasketList">
              <div className='deleteimg' onClick={() => dispatch(removeFromBasket(item, true))}>
                <img src={trash} alt="Remove" />
              </div>
              <div className="responsivlist">
                <div className="responsivImage">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="responsivExplain">
                  <p>{item.name}</p>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className='responsivQuantity'>
                  <span className='plus' onClick={() => dispatch(increaseQuantity(item))}>+</span>
                  <p>{item.quantity}</p>
                  <span onClick={() => dispatch(removeFromBasket(item))}>—</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="responsivEmpty">
          <div className="emptydescription">
            <div className="emptyImage">
              <img src={BigredBasket} />
            </div>
            <h2 className='Responsivemptydescription1'>Opps!</h2>
            <h2 className='Responsivemptydescription2'>Basket empty</h2>
          </div>
          <div className='Responsivemptycheckout'>
            <button className='ResponsivemptycheckBtn'>
              <p>Checkout</p>
              <span>$0.00</span>
            </button>
          </div>
        </div>
      )}
      {basketItems.length > 0 && (
        <div className="responsivButton">
          <Link to={'/checkoutPage'}>
            <button className='responsivCheck'>
              <span className='responsivText'>Checkout</span>
              <span className='responsivPrice'>${totalPrice.toFixed(2)}</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  )}
</div>

    </div>
  );
}

export default Internal;

