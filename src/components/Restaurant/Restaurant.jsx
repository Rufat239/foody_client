import React, { useEffect, useState } from 'react';
import '../../style/restaurant.css';
import filterImg from '../../assets/restaurant_images/filter_list.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Restaurant() {
  const [selectedMenu, setSelectedMenu] = useState('All');
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [category, setCategory] = useState([]);

  //  GET RESTAURANT DATAS
  useEffect(() => {
    const getRestaurants = async () => {
      const restaurantURL = `https://test-foody-admin-default-rtdb.firebaseio.com/restaurants.json`;
      try {
        const response = await axios.get(restaurantURL);
        const data = response.data;
        setRestaurantsData(Object.values(data));
      } catch (error) {
        console.log("error", error);
      }
    };

    getRestaurants();
  }, []);

  // GET CATEGORY DATAS
  useEffect(() => {
    const getCategoryDatas = async () => {
      const categorUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/categories.json`;

      try {
        const response = await axios.get(categorUrl);
        const dataCategory = response.data;
        setCategory(Object.values(dataCategory));
      } catch (error) {
        console.log("error");
      }
    };
    getCategoryDatas();
  }, []);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setIsFilterMenuVisible(false);
  };

  const toggleFilterMenu = () => {
    setIsFilterMenuVisible(!isFilterMenuVisible);
  };

 
  const filteredRestaurants = selectedMenu === 'All'
    ? restaurantsData
    : restaurantsData.filter(restaurant => restaurant.category.toLowerCase() === selectedMenu.toLowerCase());

  return (
    <div className='main-restaurant'>
      {/* Sidebar */}
      <section className={`restaurant_sidebar`}>
        <div className='restaurant_body'>
          {category.map((item, index) => (
            <div key={index} className='restaurant_side' onClick={() => handleMenuClick(item.name)}>
              <div className='image'>
                <img src={item.url} alt={item.name} />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Filter part in Responsive */}
      <div className="filterhamburger">
        <div className="filterHead" onClick={toggleFilterMenu}>
          <div className="filterIcon">
            <img src={filterImg} alt="Filter Icon" />
          </div>
          <p>Filters</p>
        </div>

        {isFilterMenuVisible && (
          <div className='filterMenu'> 
            <button className='filterDelete' onClick={toggleFilterMenu}>x</button>
            <ul className='menuList'>
              {category.map((item, index) => (
                <li key={index} onClick={() => handleMenuClick(item.name)}>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Restaurant Cards */}
      <section className="restaurantCards">
        {filteredRestaurants.map((restaurant) => (
          <div className="cardHeight" key={restaurant.id}>
            <div className="restaurants_card" style={{ position: "relative" }}>
              {restaurant.isNew && <div className="newlist">New</div>}

              {/* INTERNAL LINK */}
              <Link to="/internal" state={{ restaurant }}>
                <div className="restaurant_cardImage">
                  <img src={restaurant.url} alt={restaurant.name} />
                </div>
                <div className="restaurants_Info">
                  <h2>{restaurant.name}</h2>
                  <p>{restaurant.cuisine}</p>
                </div>
                <div className="delivery">
                  <p>${restaurant.deliveryPrice} Delivery</p>
                  <span>{restaurant.deliveryMin} Min</span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Restaurant;
