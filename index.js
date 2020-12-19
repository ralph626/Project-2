//server
const db = require("./models");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync().then(() => {
  //spin up express server in here after db is connected
  app.listen(process.env.PORT || 3000, () => {
    console.log("working!");
  });
});
