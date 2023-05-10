// const mongoose = require('mongoose');
// const uri = process.env.ATLASURI;

// // connect to MongoDB Atlas
// mongoose.connect(uri)
// .then( () => console.log('Connected to MongoDB!'))
// .catch( err => console.log(err))



const mongoose  = require('mongoose');
require("dotenv").config()

const connected_to_mongoAtlas = mongoose.connect(process.env.ATLASURL)



module.exports = connected_to_mongoAtlas