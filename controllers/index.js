const router = require('express').Router();
////<<<<<<< HEAD
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
// const dashboardRoutes = require('.rentSearch-routes');
//=======

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
// const dashboardRoutes = require('.rentSearch-routes');

////>>>>>>> 43f1683df57e104937302d7e805b20c69592e3e1
// the following paths
router.use('/', homeRoutes);
// router.use('/rentSearch', dashboardRoutes);
router.use('/api', apiRoutes);
///<<<<<<< HEAD
//=======

//>>>>>>> 43f1683df57e104937302d7e805b20c69592e3e1
module.exports = router;