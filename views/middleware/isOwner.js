let listing = require('../../models/listing.js');

let isOwner = async (req, res, next) => {
    let {id} = req.params;
    let foundListing = await listing.findById(id);
    if(!foundListing.owner.equals(req.user._id)){
        req.flash('error', 'You are not authorized to edit this listing!');
        return res.redirect(`/listings/${id}`);
    };
    next();
};

module.exports = {isOwner};