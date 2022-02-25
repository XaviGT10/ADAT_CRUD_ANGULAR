const express = require("express");
const app = express();

const Formula1Route = express.Router();
let Formula1 = require("../model/F1Model");

// Add Formula1
Formula1Route.route("/createf1").post((req, res, next) => {
  Formula1.create(req.body, (error, data) => {
    if (error) {
      return res.send(error);
    } else {
      return res.json(data);
    }
  });
});

// Get Formula1
Formula1Route.route("/allf1").get((req, res) => {
  Formula1.find((error, data) => {
    if (error) {
      return res.send(data);
    } else {
      return res.json(data);
    }
  });
});

// Get RecipiesById
Formula1Route.route("/findf1/:id").get((req, res, next) => {
  Formula1.findById(req.params.id, (error, data) => {
    if (error) {
      return res.send(error);
    } else {
      res.json(data);
    }
  });
});

// Update Formula1
Formula1Route.route("/updatef1/:id").put((req, res) => {
  Formula1.findOneAndUpdate(
    { _id: req.params.id },
    req.body
    ,
    (error, data) => {
      if (error) {
        return res.send(error);
      } else {
        console.log("Formula 1 team updated successfully!");
        return res.json(req.body);

      }
    }
  );
});

// Delete Formula1 registro
Formula1Route.route("/removef1/:id").delete((req, res, next) => {
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
