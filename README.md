# TravelNest 🌍

**🌐 Live Demo:** [https://travelnest-vpml.onrender.com](https://travelnest-vpml.onrender.com)

## 📖 Short Overview
TravelNest is a full-stack booking application (inspired by platforms like Airbnb) that allows users to discover, list, and review travel accommodations across the globe. The platform features secure user authentication, authorization for property and review management, cloud-hosted image uploads, and a fully responsive interface.

## 💻 Tech Stack
- **Frontend:** HTML, CSS, JavaScript, EJS (Embedded JavaScript Templating), Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Passport.js (Local Strategy, Express Sessions)
- **Utilities & Cloud:** Cloudinary (Image Hosting), Joi (Schema Validation), Multer (File Uploads)

## 🧠 What I Learned
Building TravelNest was a deep dive into full-stack development. Key takeaways include:
- **MVC Architecture:** Structuring a Node/Express application using the Model-View-Controller pattern for scalable and maintainable code.
- **Authentication & Authorization:** Implementing secure login/registration flows with persistent sessions and protecting routes with custom middleware (e.g., ensuring only listing owners can edit/delete their properties).
- **Relational Data in NoSQL:** Linking models and utilizing Mongoose's `populate()` to tie Users, Listings, and Reviews together.
- **Cloud Integrations:** Handling `multipart/form-data` uploads with Multer and securely storing real user images in Cloudinary.
- **Graceful Error Handling:** Creating robust backend validation with Joi and utilizing an asynchronous wrap function (`wrapAsync`) to catch and display meaningful server-side errors without crashing the app.

---

### 🚀 Setup / Run Locally
1. Clone the repository.
2. Run `npm install` to download dependencies.
3. Set up a `.env` file with your `ATLAS_URL`, `SECRET`, `CLOUD_NAME`, `CLOUD_API_KEY`, and `CLOUD_API_SECRET`.
4. Run `node app.js` to start the server at `http://localhost:3000`.

---
<div align="center">
  <p>Built with ❤️ as a full-stack learning project.</p>
</div>