require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const morgan = require("morgan");
const db = require("./db");
const app = express();

app.use(cors());
app.use(express.json());

// app.use(morgan("dev"))
// app.use((req, res, next) => {

// });

const port = process.env.PORT || 3001;

//Get all Restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const restaurantsRatingsData = await db.query(
      "select * from restaurants left join (select restaurant_id, count(*), trunc(avg(rating),1) as avg_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id"
    );

    res.status(200).json({
      status: "success",
      results: restaurantsRatingsData.rows.length,
      data: {
        restaurants: restaurantsRatingsData.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Get a Restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const restaurant = await db.query(
      "select * from restaurants left join (select restaurant_id, count(*), trunc(avg(rating),1) as avg_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id=$1",
      [req.params.id]
    );

    const reviews = await db.query(
      "select * from reviews where restaurant_id = $1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        restaurants: restaurant.rows[0],
        review: reviews.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Create a Restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query(
      "insert into restaurants (name, location, price_range) values ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(201).json({
      status: "success",
      data: {
        restaurants: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Update Restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "update restaurants set name = $1, location = $2, price_range=$3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurants: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Delete Restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("delete from restaurants where id = $1", [
      req.params.id,
    ]);
  } catch (error) {
    console.log(error);
  }
  res.status(204).json({
    status: "success",
  });
});

//Add a review
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    res.status(201).json({
      status: "success",
      data: {
        reviews: newReview.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Serve is up and runing on port ${port}`);
});
