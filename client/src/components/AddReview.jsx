import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("Ratings");
  const [reviewText, setReviewText] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        rating,
        review: reviewText,
      });
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="row g-3 mb-4">
        <div className="col-md-6">
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
        <div className="col-md-6">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option disabled>Ratings</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="review" className="form-label">
            Review
          </label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="form-control"
            id="review"
            rows="3"
          ></textarea>
        </div>

        <div className="col-12">
          <button
            type="submit"
            onClick={handleSubmitReview}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
