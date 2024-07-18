import React from 'react';
import style from '../../style/restaurant.css';
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
  { image: pizza, menu: 'Azerbaijan' },
  { image: pizza, menu: 'Chinese' },
  { image: pizza, menu: 'Pizza' },
  { image: pizza, menu: 'Indian' },
  { image: pizza, menu: 'Kabab' },
  { image: pizza, menu: 'Fast Food' },
  { image: pizza, menu: 'Sea Food' },
];

function Restaurant() {
  return (
    <div className={style.main}>
      {/* Side part */}
      <section className='sidebar'>
        <div className={style.body}>
          {filter.map((item, index) => (
            <div key={index} className={style.side}>
              <div className={style.image}>
                <img src={item.image} alt={item.menu} />
              </div>
              <span>{item.menu}</span>
            </div>
          ))}
        </div>
      </section>
                                                                          {/* Restaurant part */}
      <section className={style.restaurant}>
        {restaurants.map((restaurant, index) => (
          <Link key={index} to={'/internal'}>
            <div className={style.card}>
              <div className={style.cardImage}>
                <img src={restaurant.image} alt={restaurant.name} />
              </div>
              <div className={style.info}>
                <h2>{restaurant.name}</h2>
                <p>{restaurant.description}</p>
              </div>
              <div className={style.delivery}>
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
