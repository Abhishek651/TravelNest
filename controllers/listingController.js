const listing = require('../models/listing.js');

const index = async (req, res) => {
    const allListing = await listing.find();
    res.render('listings/index.ejs', { allListing });
};

const renderNewForm = (req, res) => {
    res.render('listings/newListing.ejs');
};

const show = async (req, res) => {
    let { id } = req.params;
    const singleListing = await listing.findById(id).populate({ path: "review", populate: { path: "createdBy" } }).populate('owner');
    if (!singleListing) {
        req.flash('error', 'Listing not found');
        res.redirect('/listings');
    } else {
        res.render('listings/show.ejs', { singleListing });
    }
};

const create = async (req, res) => {
    let { title, description, image, price, location, country } = req.body;
    let newListing = new listing({
        title,
        description,
        image,
        price,
        location,
        country
    });

    const url = req.file.path;
    const filename = req.file.filename;
    newListing.image = { url, filename };

    newListing.owner = req.user._id;
    await newListing.save();
    req.flash('success', 'New listing Added!');
    res.redirect('/listings');
};

const renderEditForm = async (req, res) => {
    let { id } = req.params;
    const editListing = await listing.findById(id);
    res.render('listings/editListing.ejs', { editListing });
};

const update = async (req, res) => {
    let { title, description, image, price, location, country } = req.body;
    let { id } = req.params;

    await listing.findByIdAndUpdate(id, {
        title,
        description,
        price,
        location,
        country
    });

    if(req.file != undefined){
        const url = req.file.path;
        const filename = req.file.filename;
        await listing.findByIdAndUpdate(id, { image: { url, filename } });
    };

    req.flash('success', 'Listing Updated!');
    res.redirect(`/listings/${id}`);
};

const destroy = async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndDelete(id);
    req.flash('success', 'Listing Deleted!');
    res.redirect('/listings');
};

module.exports = {
    index,
    renderNewForm,
    show,
    create,
    renderEditForm,
    update,
    destroy
};