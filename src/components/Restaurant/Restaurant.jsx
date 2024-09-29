import React, { useEffect, useState } from 'react';
import '../../style/restaurant.css';
import pizza from '../../assets/restaurant_images/Pizza.jpg';
import burger from '../../assets/restaurant_images/burger.jpg';
import mania from '../../assets/restaurant_images/mania.jpg';
import filterImg from '../../assets/restaurant_images/filter_list.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const restaurants = [
  { image: pizza, name: 'Anadolu Restoran', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: burger, name: 'Burger King', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: pizza, name: 'Anadolu Restoran', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: mania, name: 'Coffee Mania', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: mania, name: 'Coffee Mania', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: burger, name: 'Burger King', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: pizza, name: 'Anadolu Restoran', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: mania, name: 'Coffee Mania', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' }
];

const filter = [
  { image: pizza, menu: 'All' },
  { image: pizza, menu: 'Azerbaijan' },
  { image: pizza, menu: 'Korean' },
  { image: pizza, menu: 'Chinese' },
  { image: pizza, menu: 'Pizza' },
  { image: pizza, menu: 'Indian' },
  { image: pizza, menu: 'Kabab' },
  { image: pizza, menu: 'Fast Food' },
  { image: pizza, menu: 'Sea Food' },
  { image: pizza, menu: 'Indian' },
  { image: pizza, menu: 'Fast Food' },
  { image: pizza, menu: 'Sea Food' },
  { image: pizza, menu: 'Indian' },
  { image: pizza, menu: 'Kabab' },
  { image: pizza, menu: 'Fast Food' },
  { image: pizza, menu: 'Sea Food' },
];

function Restaurant() {
  const [selectedMenu, setSelectedMenu] = useState('All');
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);

  const [restaurantsData, setRestaurantsData] = useState([]);


  //  GET RESTAURANT DATAS

  useEffect(() => {
    const getRestaurants = async () => {
      const restaurantURL = `https://test-foody-admin-default-rtdb.firebaseio.com/restaurants.json`;
      try {
        const response = await axios.get(restaurantURL);
        const data = response.data;
        console.log(data, "data");

        setRestaurantsData(Object.values(data));
      } catch (error) {
        console.log("error", error);
      }
    };

    getRestaurants();
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
    : restaurantsData.filter(restaurant => restaurant.description.toLowerCase().includes(selectedMenu.toLowerCase()));

  return (
    <div className='main-restaurant'>
      {/* Sidebar */}
      <section className={`restaurant_sidebar `}>
        <div className='restaurant_body'>
          {filter.map((item, index) => (
            <div key={index} className='restaurant_side' onClick={() => handleMenuClick(item.menu)}>
              <div className='image'>
                <img src={item.image} alt={item.menu} />
              </div>
              <span>{item.menu}</span>
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
          <div className="filterMenu">
            <button className='filterDelete' onClick={toggleFilterMenu}>x</button>
            <ul className='menuList'>
              {filter.map((item, index) => (
                <li key={index} onClick={() => handleMenuClick(item.menu)}>
                  <p>{item.menu}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Restaurant Cards */}
      <section className="restaurantCards">
        {restaurantsData.map((restaurant) => (
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
