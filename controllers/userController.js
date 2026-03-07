const User = require('../models/user.js');
const passport = require('passport');

const renderSignupForm = (req, res) => {
    res.render('user/signup.ejs');
};

const signup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        let newUser = new User({ username, email });
        let registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            } else {
                req.flash('success', 'You have been signed up');
                res.redirect('/listings');
            }
        });
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/signup');
    }
};

const renderLoginForm = (req, res) => {
    res.render('user/login.ejs');
};

const login = (req, res) => {
    req.flash('success', 'login success');
    let redirectUrl = res.locals.redirectUrl || '/listings';
    res.redirect(redirectUrl);
};

const logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            next(err);
        } else {
            req.flash('success', 'You have been logged out');
            res.redirect('/listings');
        }
    });
};

module.exports = {
    renderSignupForm,
    signup,
    renderLoginForm,
    login,
    logout
};