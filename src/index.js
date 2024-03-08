import connectDb from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server started at port 8000");
    });
  })
  .catch( (error) => {
    console.log("MongoDb connection failed: ",error);
  });

/*
// problem
// require("dotenv").config({path: './env'});

import dotenv from "dotenv";
dotenv.config({
  path: './env'
});
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log("App is running on port 8000");
    });
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
})();

*/
