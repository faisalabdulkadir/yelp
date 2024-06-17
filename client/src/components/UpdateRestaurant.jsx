import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      const result = response.data.data.restaurants;
      setName(result.name);
      setLocation(result.location);
      setPriceRange(result.price_range);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });

    navigate("/");
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="name"
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="form-control"
            id="location"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price_range" className="form-label">
            Price Range
          </label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            type="number"
            className="form-control"
            id="price_range"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
