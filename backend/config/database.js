const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{
useNewUrlParser: true,
	useUnifiedTopology: true,

	
})

const db = mongoose.connection;

db.on("error",console.error.bind(console,"Error while connecting database"));
db.once("open", ()=>{
    console.log("database connected!");
})

module.exports = db;
