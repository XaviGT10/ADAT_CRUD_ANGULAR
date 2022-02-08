const express = require("express");
const app = express();

const Formula1Route = express.Router();
let Formula1 = require("../model/F1Model");

// Add Formula1
Formula1Route.route("/F1Team").post((req, res, next) => {
  Formula1.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Formula1
Formula1Route.route("/F1Team").get((req, res) => {
  Formula1.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get RecipiesById
Formula1Route.route("/F1Team/:id").get((req, res) => {
  Formula1.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Formula1
Formula1Route.route("/F1Team/:id").put((req, res, next) => {
  Formula1.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("Formula 1 team updated successfully!");
      }
    }
  );
});

// Delete Formula1 registro
Formula1Route.route("/F1Team/:id").delete((req, res, next) => {
  Formula1.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = Formula1Route;
