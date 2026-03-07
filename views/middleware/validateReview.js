const customError = require('../../utils/customError.js');
const { reviewSchemaValidation } = require('../../validationSchema.js');

const validateReview = (req, res, next) => {
    let validationResult = reviewSchemaValidation.validate(req.body);
    console.log(validationResult);
    if (validationResult.error) {
        throw new customError(400, validationResult.error);
    } else {
        next();
    }
};

module.exports = validateReview;