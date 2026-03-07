//Express and router require
const express = require('express');
const router = express.Router({mergeParams:true});

//error handling
const wrapAsync = require('../utils/wrapAsync.js')

//middleware require
const validateReview = require('../views/middleware/validateReview.js');
const {isLoggedIn,saveRedirectUrl} = require('../views/middleware/isLoggedIn.js');
const {isReviewOwner} = require('../views/middleware/isReviewOwner.js');

//controller require
const reviewController = require('../controllers/reviewController.js');


//review post route
router.post('/', isLoggedIn, validateReview, wrapAsync(reviewController.create));

//review delete route
router.delete('/:reviewId', isLoggedIn, isReviewOwner, wrapAsync(reviewController.destroy));


module.exports = router;
