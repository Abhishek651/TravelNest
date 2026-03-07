//Express and router require
const express = require('express');
const router = express.Router();

//cloudinary and multer require
const { storage } = require('../cloudConfig.js');
const multer = require('multer');
const upload = multer({ storage }); // Use Cloudinary storage for multer

//error handling
const wrapAsync = require('../utils/wrapAsync.js')

//middleware require
const validateListing = require('../views/middleware/validateListing.js');
const {isLoggedIn} = require('../views/middleware/isLoggedIn.js');
const {isOwner} = require('../views/middleware/isOwner.js');

//controller require
const listingController = require('../controllers/listingController.js');

router.route('/')
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,upload.single('image'), validateListing, wrapAsync(listingController.create));

router.get('/new', isLoggedIn, listingController.renderNewForm);

router.route('/:id')
    .get(wrapAsync(listingController.show))
    .put(isLoggedIn, isOwner, upload.single('image'), validateListing, wrapAsync(listingController.update))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroy));

router.get('/:id/edit', isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;