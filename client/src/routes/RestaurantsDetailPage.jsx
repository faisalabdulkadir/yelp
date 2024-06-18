import React, { useContext, useEffect } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useParams } from "react-router-dom";

const RestaurantsDetailPage = () => {
  const { selectedRestaurants, setSelectedRestaurants } =
    useContext(RestaurantsContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return <div>{selectedRestaurants && selectedRestaurants.name}</div>;
};

export default RestaurantsDetailPage;
