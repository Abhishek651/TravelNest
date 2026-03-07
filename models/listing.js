const mongoose = require('mongoose');
const review = require('./review.js')

let listingSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    image:{
        url : String,
        filename : String
    },
    price:{
        type: Number
    },
    location:{
        type: String
    },
    country:{
        type: String
    },
    review : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Review"
    }],
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    } 
});



// Below code sets up an automatic cleanup process in your database.
// After a listing is deleted, find all the reviews associated with that listing and delete them too.
// This prevents "orphan" reviews from staying in your database after the listing they belonged to has been removed.

// How it's supposed to work:
// listingSchema.post('findOneAndDelete', ...): This is a Mongoose "middleware" 
// that triggers after the findOneAndDelete command successfully runs on a listing.

// async(listing) => { ... }: The function receives the listing document that was just deleted.

// if(listing): It checks to make sure a listing was actually deleted.
// await review.deleteMany(...): It then runs the deleteMany command on your review collection.
// {_id: {$in: listing.review}}: This is the crucial part. 
// It tells MongoDB to delete all reviews whose _id is present in the listing.review 
// array (the array of review IDs you stored in the deleted listing).

listingSchema.post('findOneAndDelete',async(listing)=>{
    if(listing){
        await review.deleteMany({_id:{$in: listing.review}});
    };
});

let listing = mongoose.model('listing',listingSchema);


module.exports = listing;