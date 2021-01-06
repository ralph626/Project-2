const router = require("express").Router();
const { Router } = require("express");
const { User, Property, Weather } = require("../../models");

//===========GET ALL USERS================
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//================='POST' ROUTE TO SIGNUP==========//
router.post("/", async (req,res) =>{
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUser => {
      req.session.save(() =>{
        req.session.user_id = dbUser.id;
        req.session.username = dbUser.username;
        req.session.loggedIn =true;

        res.json(dbUser);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



//========='POST' ROUTE TO VERIFY CURRENT USER==============//
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
