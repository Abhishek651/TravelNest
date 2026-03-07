const joi = require('joi');
const { createSearchIndex } = require('./models/review');

module.exports.listingSchemaValidation = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    image: joi.string().allow('',null), // Allow empty string or null for image
    price: joi.number().required(),
    location: joi.string().required(),
    country: joi.string().required()
});

module.exports.reviewSchemaValidation = joi.object({
    review: joi.object({
        comment: joi.string().required(),
        rating: joi.number().min(1).max(5).required(),
        // createdAt: joi.date().required()
    })
})