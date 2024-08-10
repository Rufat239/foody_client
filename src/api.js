import axios from "axios";
export const getRestaurants = async () => {
  let response;

  try {
    response = await axios.get("http://localhost:3000//api/restuarants");
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const postBasketData = async (productData) => {
  let response;
  try {
    response = await axios.post(
      "http://localhost:3000/api/restaurants",
      productData
    );

    console.log("Response:", response.data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteRestaurant = async (restaurantId) => {
  let response;
  try {
    response = await axios.delete(
      `http://localhost:3000/api/restaurants/${restaurantId}`
    );
    console.log("Response:", response.data);
  } catch (err) {
    console.log(err);
  }
};
