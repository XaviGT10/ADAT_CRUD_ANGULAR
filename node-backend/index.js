const { response } = require("express");
let express = require("express"),
  path = require("path"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  mongoDb = require("./database/db");

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db).then(
  () => {
    console.log("Database sucessfully connected ");
  },
  (error) => {
    console.log("Database error: " + error);
  }
);

const f1Route = require("./routes/Formula1.routes");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());


// API root
app.use("/api", f1Route);

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

// 404 Handler
app.use((req, res, next) => {
  response.status(404).end();
});

// Base Route
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});


// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
