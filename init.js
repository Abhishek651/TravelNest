//generate sample data for mongodb
const mongoose = require('mongoose');
const listing = require('./models/listing.js');
async function main(){
  //  return mongoose.connect('mongodb://127.0.0.1:27017/travelnest');
  return mongoose.connect('mongodb+srv://cyberlord700:123321Aas%40@bunker.tkqbtd2.mongodb.net/TravelNest?appName=Bunker');
};



const listingData = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and peaceful sunsets.",
    image: {
      url: "https://images.unsplash.com/photo-1743525407528-19a48569192a?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "beachfront-cottage.jpg"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers and nightlife lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      filename: "modern-loft.jpg"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Mountain Retreat Cabin",
    description: "Disconnect from the world in this peaceful mountain cabin surrounded by breathtaking landscapes.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "mountain-cabin.jpg"
    },
    price: 900,
    location: "Aspen",
    country: "United States",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Luxury Desert Villa",
    description: "Experience luxury living in this stunning desert villa with a private pool and panoramic views.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      filename: "desert-villa.jpg"
    },
    price: 2800,
    location: "Dubai",
    country: "United Arab Emirates",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Rustic Countryside Farmhouse",
    description: "Enjoy the charm of rural life in this spacious farmhouse surrounded by greenery and fresh air.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "countryside-farmhouse.jpg"
    },
    price: 700,
    location: "Tuscany",
    country: "Italy",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Seaside Apartment",
    description: "Wake up to soothing sea waves in this cozy apartment just steps away from the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      filename: "seaside-apartment.jpg"
    },
    price: 1100,
    location: "Barcelona",
    country: "Spain",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Urban Studio Flat",
    description: "Compact yet stylish studio perfect for solo travelers and short city stays.",
    image: {
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      filename: "urban-studio.jpg"
    },
    price: 600,
    location: "Tokyo",
    country: "Japan",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Lakeview Cottage",
    description: "Relax beside the serene lake in this beautiful cottage offering peaceful nature vibes.",
    image: {
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
      filename: "lakeview-cottage.jpg"
    },
    price: 950,
    location: "Lake Tahoe",
    country: "United States",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Modern Glass House",
    description: "Architectural masterpiece with floor-to-ceiling glass walls and minimalistic interiors.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "glass-house.jpg"
    },
    price: 3200,
    location: "Los Angeles",
    country: "United States",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Snowy Alpine Chalet",
    description: "Perfect winter escape with cozy interiors and breathtaking snowy mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      filename: "alpine-chalet.jpg"
    },
    price: 1700,
    location: "Zermatt",
    country: "Switzerland",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Traditional Ryokan Stay",
    description: "Experience authentic Japanese hospitality in this peaceful ryokan with tatami rooms.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "ryokan-stay.jpg"
    },
    price: 800,
    location: "Kyoto",
    country: "Japan",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Cliffside Ocean Villa",
    description: "Luxury villa perched on a cliff offering dramatic ocean views and ultimate privacy.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "cliffside-villa.jpg"
    },
    price: 2900,
    location: "Santorini",
    country: "Greece",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Jungle Eco Lodge",
    description: "Stay immersed in nature in this eco-friendly lodge surrounded by lush jungle.",
    image: {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      filename: "jungle-lodge.jpg"
    },
    price: 500,
    location: "Bali",
    country: "Indonesia",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Historic Castle Room",
    description: "Live like royalty in this beautifully preserved historic castle accommodation.",
    image: {
      url: "https://images.unsplash.com/photo-1505842465776-3d90f6163108",
      filename: "historic-castle.jpg"
    },
    price: 2100,
    location: "Edinburgh",
    country: "United Kingdom",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Minimalist Scandinavian Home",
    description: "Clean design, warm lighting, and peaceful surroundings define this Nordic retreat.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "scandinavian-home.jpg"
    },
    price: 1300,
    location: "Stockholm",
    country: "Sweden",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Beach Bungalow",
    description: "Simple, cozy, and just steps from the sandy shore — perfect for a laid-back vacation.",
    image: {
      url: "https://images.unsplash.com/photo-1475855581690-80accde3a8a9",
      filename: "beach-bungalow.jpg"
    },
    price: 750,
    location: "Goa",
    country: "India",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Hilltop Sunset House",
    description: "Enjoy mesmerizing sunsets from this peaceful hilltop home with panoramic views.",
    image: {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      filename: "hilltop-house.jpg"
    },
    price: 980,
    location: "Udaipur",
    country: "India",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Premium living experience with skyline views and world-class amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80",
      filename: "penthouse-suite.jpg"
    },
    price: 4500,
    location: "Mumbai",
    country: "India",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Cozy Wooden Treehouse",
    description: "Unique treehouse stay combining adventure, comfort, and nature.",
    image: {
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
      filename: "wooden-treehouse.jpg"
    },
    price: 650,
    location: "Kerala",
    country: "India",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  },
  {
    title: "Modern Smart Apartment",
    description: "Fully automated apartment with smart controls and sleek modern interiors.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      filename: "smart-apartment.jpg"
    },
    price: 1400,
    location: "Bengaluru",
    country: "India",
    // owner: "69a97fc7d597788b9e07266d" // local db
    owner: "69aaf1b7cb04bb8bee127c53" // atlas
  }
];



main().then((res)=>{
    console.log('mongo connection successfull');
    listing.deleteMany({}).then(()=>{
        console.log('deletion success');
    listing.insertMany(listingData).then(()=>{
        // amazonq-ignore-next-line
        console.log('Insertion success');
    });
});
});