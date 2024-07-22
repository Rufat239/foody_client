import React, { useState } from 'react';
import '../../style/restaurant.css';
import pizza from '../../assets/restaurant_images/Pizza.jpg';
import burger from '../../assets/restaurant_images/burger.jpg';
import mania from '../../assets/restaurant_images/mania.jpg';
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
      <section className='sidebar'>
        <div className='body'>
          {filter.map((item, index) => (
            <div key={index} className='side' onClick={() => handleMenuClick(item.menu)}>
              <div className='image'>
                <img src={item.image} />
              </div>
              <span>{item.menu}</span>
            </div>
          ))}
        </div>
      </section>
      <section className='restaurant'>
        {filteredRestaurants.map((restaurant, index) => (
          <Link key={index} to={'/internal'}>
            <div className='sry_card'>
              <div className='cardImage'>
                <img src={restaurant.image} />
              </div>
              <div className='srym_info'>
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
