// Import required packages
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// Define the user schema (structure of user data)
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    }
    // Note: username and password fields are automatically added by passport-local-mongoose
});

// Add passport-local-mongoose plugin to handle authentication
// This automatically adds username, password fields and authentication methods
userSchema.plugin(passportLocalMongoose);

// Create the User model from the schema
// MongoDB will create a collection named "users" (automatically pluralized)
const User = mongoose.model('User', userSchema);

// Export the User model to use in other files
module.exports = User;