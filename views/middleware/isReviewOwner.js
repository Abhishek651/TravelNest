let review = require('../../models/review.js');

let isReviewOwner = async (req, res, next) => {
    let {reviewId,id} = req.params;
    let foundReview = await review.findById(reviewId);
    if(!foundReview.createdBy.equals(req.user._id)){
        req.flash('error', 'You are not authorized to delete this review!');
        return res.redirect(`/listings/${id}`);
    };
    next();
};

module.exports = {isReviewOwner};