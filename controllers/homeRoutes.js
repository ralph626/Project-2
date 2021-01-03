const router = require("express").Router();
const { Project, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  } else {
    res.render("login");
  }
});

module.exports = router;
