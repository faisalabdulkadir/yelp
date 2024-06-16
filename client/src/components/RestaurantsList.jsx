import React from "react";

const RestaurantsList = () => {
  return (
    <div>
      <table class="table table-dark table-hover">
        <thead className="table-primary">
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>McDonalds</td>
            <td>Vegas</td>
            <td>$$</td>
            <td>Ratings</td>
            <td>
              <button type="button" className="btn btn-warning">
                Update
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>McDonalds</td>
            <td>Vegas</td>
            <td>$$</td>
            <td>Ratings</td>
            <td>
              <button type="button" className="btn btn-warning">
                Update
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsList;
