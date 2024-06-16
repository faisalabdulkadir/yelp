import React from "react";

const AddRestaurant = () => {
  return (
    <div>
      <form>
        <div className="mb-3 row">
          <div className="col">
            <input type="text" class="form-control" placeholder="name" />
          </div>
          <div className="col">
            <input type="text" class="form-control" placeholder="location" />
          </div>
          <div className="col">
            <select class="form-select">
              <option selected disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$</option>
            </select>
          </div>
          <div className="col">
            <button type="button" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
