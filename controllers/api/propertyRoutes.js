const router = require('express').Router();
const { Property, User, Weather } = require('../../models');
const withAuth = require('../../utils/auth');
//GET ALL PROPERTY'S=======================================
router.get('/', (req, res) => {
  console.log('======================');
  Property.findAll({
    attributes: [
      'id',
      'rent',
      'rentRangeLow',
      'rentRangeHigh',
      'listings',[
        'id',
        'formattedAddress',
        'city',
        'state',
        'price',
        'bedrooms',
        'bathrooms',
        'propertyType',
        'squareFootage'
      ]
    ]
  })
    .then(dbPropertyData => res.json(dbPropertyData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one Property; api/Propertys/id
router.get('/:id', (req, res) => {
  Property.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'rent',
      'rentRangeLow',
      'rentRangeHigh',
      'listings',[
        'id',
        'formattedAddress',
        'city',
        'state',
        'price',
        'bedrooms',
        'bathrooms',
        'propertyType',
        'squareFootage'
      ]
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPropertyData => {
      if (!dbPropertyData) {
        res.status(404).json({ message: 'No Property found with this id' });
        return;
      }
      res.json(dbPropertyData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// creates a Property; api/Propertys
router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', Property_url: 'https://taskmaster.com/press', user_id: 1}
  Property.create({
    address: req.body.address,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    propertyType: req.session.propertyType,
    squareFootage:req.body.squareFootage
  })
    .then(dbPropertyData => res.json(dbPropertyData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// deletes a Property; api/Propertys/id
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Property.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPropertyData => {
      if (!dbPropertyData) {
        res.status(404).json({ message: 'No Property found with this id' });
        return;
      }
      res.json(dbPropertyData);
    })
    .catch(err => {
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