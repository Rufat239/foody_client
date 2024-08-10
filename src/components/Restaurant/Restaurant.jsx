import React, { useState } from "react";
import "../../style/restaurant.css";
import pizza from "../../assets/restaurant_images/Pizza.jpg";
import burger from "../../assets/restaurant_images/burger.jpg";
import mania from "../../assets/restaurant_images/mania.jpg";
import filterImg from "../../assets/restaurant_images/filter_list.jpg";
import { Link } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    image: pizza,
    name: "Anadolu Restoran",
    description: "chinese, sea-food, thai, lebanese, caribbean",
    price: "5$ delivery",
    time: "9 min",
  },
  {
    id: 2,
    image: burger,
    name: "Burger King",
    description: "chinese, sea-food, thai, lebanese, caribbean",
    price: "5$ delivery",
    time: "9 min",
    isNew: true,
  },
  {
    id: 3,
    image: mania,
    name: "Anadolu Restoran",
    description: "chinese, sea-food, thai, lebanese, caribbean",
    price: "5$ delivery",
    time: "9 min",
  },
  {
    id: 4,
    image: burger,
    name: "Burger King",
    description: "chinese, sea-food, thai, lebanese, caribbean",
    price: "5$ delivery",
    time: "9 min",
  },
  {
    id: 5,
    image: mania,
    name: "Anadolu Restoran",
    description: "chinese, sea-food, thai, lebanese, caribbean",
    price: "5$ delivery",
    time: "9 min",
  },
  {
    id: 6,
    image: burger,
    name: "Burger King",
    description: "chinese, sea-food, thai, lebanese, caribbean",
    price: "5$ delivery",
    time: "9 min",
  },
  {
    id: 7,
    image: pizza,
    name: "Anadolu Restoran",
    description: "chinese, sea-food, thai, lebanese, caribbean",
    price: "5$ delivery",
    time: "9 min",
  },
  {
    id: 8,
    image: mania,
    name: "Burger King",
    description: "chinese, sea-food, thai, lebanese, caribbean",
    price: "5$ delivery",
    time: "9 min",
  },
];

const filterItems = [
  { id: 1, image: pizza, menu: "All" },
  { id: 2, image: pizza, menu: "Chinese" },
  { id: 3, image: pizza, menu: "Pizza" },
  { id: 4, image: pizza, menu: "Indian" },
  { id: 5, image: pizza, menu: "Kabab" },
  { id: 6, image: pizza, menu: "Sea Food" },
  { id: 4, image: pizza, menu: "Indian" },
  { id: 5, image: pizza, menu: "Azerbaijan" },
  { id: 6, image: pizza, menu: "Sea Food" },
  { id: 4, image: pizza, menu: "Indian" },
  { id: 5, image: pizza, menu: "Kabab" },
  { id: 6, image: pizza, menu: "Sea Food" },
];
// Sidebar area
function Sidebar({ onMenuSelect, items }) {
  return (
    <section className="restaurant_sidebar">
      <div className="restaurant_body">
        {items.map((item) => (
          <div
            key={item.id}
            className="restaurant_side"
            onClick={() => onMenuSelect(item.menu)}
          >
            <div className="image">
              <img src={item.image} alt={item.menu} />
            </div>
            <span>{item.menu}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// Filter area

function Filter({ toggleFilter, isVisible, items, onMenuSelect }) {
  return (
    <div className="filterhamburger">
      <div className="filterHead" onClick={toggleFilter}>
        <div className="filterIcon">
          <img src={filterImg} />
        </div>
        <p>Filters</p>
      </div>
      {isVisible && (
        <div className="filterMenu">
          <button className="filterDelete" onClick={toggleFilter}>
            x
          </button>
          <ul className="menuList">
            {items.map((item) => (
              <li key={item.id} onClick={() => onMenuSelect(item.menu)}>
                <p>{item.menu}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
// RestaurantCards  area
function RestaurantCards({ restaurants }) {
  return (
    <section className="restaurantCards">
      {restaurants.map((restaurant) => (
        <div className="cardHeight" key={restaurant.id}>
          <div className="restaurants_card" style={{ position: "relative" }}>
            {restaurant.isNew && <div className="newlist">New</div>}
            <Link to={"/internal"} className="cardLink">
              <div className="restaurant_cardImage">
                <img src={restaurant.image} alt={restaurant.name} />
              </div>
              <div className="restaurants_Info">
                <h2>{restaurant.name}</h2>
                <p>{restaurant.description}</p>
              </div>
              <div className="delivery">
                <p>{restaurant.price}</p>
                <span>{restaurant.time}</span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

function Restaurant() {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setIsFilterMenuVisible(false);
  };

  const toggleFilterMenu = () => {
    setIsFilterMenuVisible(!isFilterMenuVisible);
  };

  const filteredRestaurants =
    selectedMenu === "All"
      ? restaurants
      : restaurants.filter((restaurant) =>
          restaurant.description
            .toLowerCase()
            .includes(selectedMenu.toLowerCase())
        );

  return (
    <div className="main">
      <Sidebar onMenuSelect={handleMenuClick} items={filterItems} />
      <Filter
        toggleFilter={toggleFilterMenu}
        isVisible={isFilterMenuVisible}
        items={filterItems}
        onMenuSelect={handleMenuClick}
      />
      <RestaurantCards restaurants={filteredRestaurants} />
    </div>
  );
}

export default Restaurant;
