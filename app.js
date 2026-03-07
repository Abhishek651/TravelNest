const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const { title } = require('process');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user.js');

//dotenv for environment variables
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

//In production stage session
// connect-mongo exports an object; the `create` helper lives on the MongoStore class
const { MongoStore } = require('connect-mongo');
const store = MongoStore.create({
    mongoUrl: process.env.ATLAS_URL,
    crypto: {
        // use an environment variable for the secret instead of hard‑coding
        secret: process.env.SECRET
    },
    touchAfter: 24 * 60 * 60
    // time period in seconds, after which the session will be updated in the database,
    // even if it hasn't been modified. This can help reduce the number of database writes for sessions
    // that are frequently accessed but not modified.
});

store.on('error', (e) => {
    console.log('Mongo Session store error', e);
});

//mongodb url
  // Connect to MongoDB running locally on your computer
  // 127.0.0.1 = your computer (localhost)
  // 27017 = MongoDB's default port
  // test = name of the database we're connecting to
const mongooseUrl = 'mongodb://127.0.0.1:27017/travelnest';
const atlasUrl = process.env.ATLAS_URL;


//multer for file upload
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Set the destination folder for uploaded files

//router require
const listingRoute = require('./routes/listing.js');
const reviewRoute = require('./routes/review.js');
const userRoute = require('./routes/user.js');

// Without the dot:
// utils/wrapAsync.js = Node.js looks in node_modules folder (for installed packages)
// With the dot:
// ./utils/wrapAsync.js = Node.js looks in your project folder
//Error handling
const customError = require('./utils/customError.js')

const sessionOptions = {
    store: store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie: {
        expires : Date.now()+ 7*24*60*60*1000,
        maxAge : 7*24*60*60*1000,
        httpOnly : true
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.failure = req.flash('failure');
    res.locals.currentUser = req.user;
    next();
});


app.use(methodOverride('_method'));

app.set('views',path.join(__dirname,"views"));
app.set('view engine', 'ejs');

//setting up public folder to serve static files like css
//css file are not directly accessible in views folder
app.use(express.static(path.join(__dirname, 'public')));

// Without this middleware, Express can't read the form data from POST requests, 
// so req.body will be undefined and nothing gets logged.
app.use(express.urlencoded({ extended: true }));


// async function - allows us to use 'await' to wait for operations
// connection to database mongoseUrl is for local database and atlasUrl is for cloud database
async function main() {
  await mongoose.connect(atlasUrl);
};


// Call main function to connect to database
main().then((res)=>(console.log("mongo connection successful"))) // .then() runs if connection works
.catch(error => console.log(error)); // .catch() runs if connection fails


app.use('/listings', listingRoute);
app.use('/listings/:id/review', reviewRoute);
app.use('/', userRoute);

app.get('/',(req,res)=>{
    res.redirect('/listings');
});


//page not found 
// app.use() without a path automatically catches all unmatched requests, making it perfect for 404 handling.
app.use((req,res,next)=>{
    next(new customError(404,'Page not found'));
});

//Error handler
app.use((error,req,res,next)=>{
    let {statusCode=500,message='something went wrong'} = error;
    // res.status(statusCode).send(message);
    res.status(statusCode).render('error.ejs',{statusCode,message});
    if(statusCode !== 404){
        console.log(error.stack);
    }
})




app.listen(port,()=>{
    console.log("server is working on port 3000");
});