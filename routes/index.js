const { Router } = require('express');
const artqueries = require('./artqueries');
const router = Router();

// Routing middleware: Two parameters:
// 1) the namespace as a string.
// 2) bind artqueries as routing middleware
// router.use('/', artqueries);

module.exports = router;
