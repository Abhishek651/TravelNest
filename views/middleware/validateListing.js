const customError = require('../../utils/customError.js');
const { listingSchemaValidation } = require('../../validationSchema.js');

const validateListing = (req, res, next) => {
    let validationResult = listingSchemaValidation.validate(req.body);
    console.log(validationResult);
    if (validationResult.error) {
        throw new customError(400, validationResult.error);
    } else {
        next();
    }
};

module.exports = validateListing;