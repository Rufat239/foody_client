import React from "react";
import pizza from "../../assets/userBasketImages/pizza.png"
import cheeseBurger from "../../assets/userBasketImages/cheeseBurger.png"
import coffee from "../../assets/userBasketImages/coffee.png"
import DeleteIcon from "../../assets/userBasket/deleteIcon.svg"
import "../../style/userBasketItem.css"
import { increaseQuantity, removeFromBasket } from '../Redux/actions/basketActions';
import { useDispatch, useSelector } from "react-redux";


function UserBasketItem() {


  const dispatch = useDispatch();
  const basketItems = useSelector(state => state.basket.basketItems);

  const userBasketData = [
    {
      image: pizza,
      title: "Papa John’s Pizza Restaurant",
      price: "15.80",
    },
    {
      image: cheeseBurger,
      title: "CheeseBurger",
      price: "15.80",
    },

    {
      image: coffee,
      title: "Papa Coffee",
      price: "15.80",
    },
    {
      image: pizza,
      title: "Papa John’s Pizza Restaurant",
      price: "15.80",
    },
    {
      image: cheeseBurger,
      title: "CheeseBurger",
      price: "15.80",
    },

    {
      image: coffee,
      title: "Papa Coffee",
      price: "15.80",
    },
  ];

  return (
    <div>
      {basketItems.map((item, index)  => (
        <div key={index} className="userBasketItemContainer">
          <div className="userBasketItemFigDet">
            <figure className="userBasketItemFigure">
              <img src={item.image} alt="" />
            </figure>

            <div className="userBasketItemDetails">
              <h2>{item.name}</h2>
              <h4>${(item.price * item.quantity).toFixed(2)}</h4>
            </div>
          </div>

          <div className="userBasketActions">
            <div className="userBasketItemInc">
              <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(removeFromBasket(index))}>-</button>
            </div>

            <button className="userDeleteIcon"  onClick={() => dispatch(removeFromBasket(index, true))}>
              <img src={DeleteIcon} alt="Delete" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserBasketItem;
