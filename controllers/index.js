const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
// const dashboardRoutes = require('.rentSearch-routes');
// the following paths
router.use('/', homeRoutes);
// router.use('/rentSearch', dashboardRoutes);
router.use('/api', apiRoutes);
module.exports = router;