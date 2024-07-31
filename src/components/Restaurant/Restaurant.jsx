import React, { useState } from 'react';
import '../../style/restaurant.css';
import pizza from '../../assets/restaurant_images/Pizza.jpg';
import burger from '../../assets/restaurant_images/burger.jpg';
import mania from '../../assets/restaurant_images/mania.jpg';
import filterIcon from '../../assets/restaurant_images/filter_list.png'
import { Link } from 'react-router-dom';

const restaurants = [
  { image: pizza, name: 'Anadolu Restoran', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: burger, name: 'Burger King', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: pizza, name: 'Anadolu Restoran', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: mania, name: 'Coffee Mania', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: mania, name: 'Coffee Mania', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: burger, name: 'Burger King', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: pizza, name: 'Anadolu Restoran', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
  { image: mania, name: 'Coffee Mania', description: 'chinese, sea-food, thai, lebanese, caribbean', price: '5$ delivery', time: '9 min' },
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
  { image: pizza, menu: 'Kabab' },
  { image: pizza, menu: 'Fast Food' },
  { image: pizza, menu: 'Sea Food' },
  
];

function Restaurant() {
  const [selectedMenu, setSelectedMenu] = useState('All');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };



  const filteredRestaurants = selectedMenu === 'All'
    ? restaurants
    : restaurants.filter(restaurant => restaurant.description.toLowerCase().includes(selectedMenu.toLowerCase()));

  return (
    <div className='main'>
                                                                {/* Sidebar */}
      <section className={`restaurant_sidebar `}>
        <div className='restaurant_body'>
          {/* <button className='sidebar-toggle' onClick={toggleSidebar} aria-label="Toggle Sidebar">
            <img src={filterIcon} alt="Filter Icon" />
            <p>Filters</p>
          </button> */}
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

                                                            {/* Restaurant Cards */}
      <section className='restaurantCards'>
        {filteredRestaurants.map((restaurant, index) => (
          <Link key={index} to={'/internal'}>
            <div className='restaurants_card'>
              <div className='restaurant_cardImage'>
                <img src={restaurant.image} alt={restaurant.name} />
              </div>
              <div className='restaurants_Info'>
                <h2>{restaurant.name}</h2>
                <p>{restaurant.description}</p>
              </div>
              <div className='delivery'>
                <p>{restaurant.price}</p>
                <span>{restaurant.time}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Restaurant;
