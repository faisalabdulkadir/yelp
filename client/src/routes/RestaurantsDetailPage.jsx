import React, { useContext, useEffect } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const RestaurantsDetailPage = () => {
  const { selectedRestaurants, setSelectedRestaurants } =
    useContext(RestaurantsContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurants(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return <div>{selectedRestaurants && (
    <>
    <h1 className="fw-lighter fs-1 text-center">{selectedRestaurants.restaurants.name}</h1>
    <div className="mt-4">
      <Reviews reviews={selectedRestaurants.review}/>
    </div>
    <AddReview />
    </>
  )}</div>;
};

export default RestaurantsDetailPage;
