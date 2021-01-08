const router = require("express").Router();
const { Property, User, Weather } = require("../../models");
const withAuth = require("../../utils/auth");
//GET ALL PROPERTY'S=======================================
router.get("/", (req, res) => {
  console.log("======================");
  Property.findAll({
    attributes: [
      "id",
      "address",
      "bedrooms",
      "property_type",
      "square_footage",
      "user_id",
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPropertyData) => res.json(dbPropertyData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one Property; api/Propertys/id
router.get("/:id", (req, res) => {
  Property.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "address",
      "bedrooms",
      "property_type",
      "square_footage",
      "user_id",
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPropertyData) => {
      if (!dbPropertyData) {
        res.status(404).json({ message: "No Property found with this id" });
        return;
      }
      res.json(dbPropertyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// creates a Property;
router.post("/rentsearch", (req, res) => {
  Property.create({
    address: req.body.address,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    property_type: req.body.property_type,
    square_footage: req.body.square_footage,
    user_id:req.session.user_id
  }).then((dbPropertyData) => {
    req.session.save(() => {
      req.session.address = dbPropertyData.address;
      req.session.bedrooms = dbPropertyData.bedrooms;
      req.session.bathrooms = dbPropertyData.bathrooms;
      req.session.property_type = dbPropertyData.property_type;
      req.session.square_footage = dbPropertyData.square_footage;
      req.session.user_id = dbPropertyData.user_id;

      res.json(dbPropertyData);
    });
  }).catch(err => console.log(err));
  ;
});

// deletes a Property;
router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Property.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPropertyData) => {
      if (!dbPropertyData) {
        res.status(404).json({ message: "No Property found with this id" });
        return;
      }
      res.json(dbPropertyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

// // updates a Property; api/Propertys/id
// router.put('/:id', withAuth, (req, res) => {
//   Property.update(
//     {
//       title: req.body.title
//     },
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   )
//     .then(dbPropertyData => {
//       if (!dbPropertyData) {
//         res.status(404).json({ message: 'No Property found with this id' });
//         return;
//       }
//       res.json(dbPropertyData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
