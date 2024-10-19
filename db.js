const mongoose = require("mongoose");
// Function to establish connection to MongoDB
module.exports = () => {
	mongoose.set('strictQuery', true); // or false, based on your preference

    // Connection parameters to avoid deprecation warnings
	const connectionParams = {
		useNewUrlParser: true,     
		useUnifiedTopology: true,  
	};
	
	try {
        // Attempt to connect to the MongoDB database using the connection parameters
		mongoose.connect(process.env.DB, connectionParams);
		
        // Log success message if connection is established
		console.log("Connected to database successfully");
	} catch (error) {
        // Log error and failure message if connection fails
		console.log(error);
		console.log("Could not connect to the database!");
	}
};