import React from 'react'

function UserBasketItem() {

    
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
    {userBasketData.map((x, index) => (
      <div key={index} className="userBasketItemContainer">
        <div className="userBasketItemFigDet">
          <figure className="userBasketItemFigure">
            <img src={x.image} alt="" />
          </figure>

          <div className="userBasketItemDetails">
            <h2>{x.title}</h2>
            <h4>${x.price}</h4>
          </div>
        </div>

        <div className="userBasketActions">
          <div className="userBasketItemInc">
            <button>+</button>
            <span>2</span>
            <button>-</button>
          </div>

          <button className="userDeleteIcon">
            <img src={DeleteIcon} alt="Delete" />
          </button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default UserBasketItem