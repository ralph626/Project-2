const router = require("express").Router();
const axios = require("axios");
const withAuth = require("../utils/auth");
const apiKey = "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2";
//<<<<<<< HEAD
const rentURL = "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice";


router.get('/', function(req,res){
  res.render("homepage");
});
router.get('/rentSearch', function(req,res){
  res.render("rentsearch");
});

//=======================================================
// })

//=======
const rentURL =
  "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice";
//>>>>>>> origin

//================GET REQUEST TO USE THE API==============//

router.get("/", function (req, res) {
  res.render("landing");
});

router.get("/rentSearch", function (req, res) {
  res.render("rentsearch");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/rentSearch", function (req, res) {
  console.log(req.body);

  // step 1 : Build Axios 'GET' to 'realty-mole' based on data passed in as part of request
  //post request body obj -
  // address: '5500 Grand Lake Drive, San Antonio, TX',
  // bedrooms: '4',
  // bathrooms: '2',
  // propertyType: 'Single Family',
  // squareFootage: '1600',
  // compCount: '5'
  const options = {
    method: "GET",
    url: "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice",
    params: req.body,
    headers: {
      "x-rapidapi-key": "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2",
      "x-rapidapi-host": "realtymole-rental-estimate-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  // step 2 : Executting the axios post and getting data back

  // step 3 : write what we will re-direct the user to with the correct data
});

module.exports = router;
