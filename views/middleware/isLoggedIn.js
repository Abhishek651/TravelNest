const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        if (req.method === 'GET') {
            req.session.redirectUrl = req.originalUrl;
        } else {
            req.session.redirectUrl = req.get('Referer') || '/listings';
        }

        req.flash('error', 'You must be logged in');
        return res.redirect('/login');
    }
    next();
};

const saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    };
    next();
}
module.exports = { isLoggedIn, saveRedirectUrl };