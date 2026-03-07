const listing = require('../models/listing.js');
const review = require('../models/review.js');

const create = async (req, res) => {
    let reviewListing = await listing.findById(req.params.id);
    let newReview = new review(req.body.review);
    await reviewListing.review.push(newReview);
    newReview.createdBy = req.user._id;
    await reviewListing.save();
    await newReview.save();
    req.flash('success', 'Your review has been added successfully!');
    res.redirect(`/listings/${req.params.id}`);
};

const destroy = async (req, res) => {
    let { id, reviewId } = req.params;
    await review.findByIdAndDelete(reviewId);
    await listing.findByIdAndUpdate(id, { $pull: { review: reviewId } });
    req.flash('success', 'Your review has been Deleted successfully!');
    res.redirect(`/listings/${id}`);
};

module.exports = {
    create,
    destroy
};