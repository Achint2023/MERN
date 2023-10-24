const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDb = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true });

        console.log('MongoDB connected (Awesome) ...');
    } catch (err) {
        console.log(err.message);
        
        // Exit process with Failure
        process.exit(1);

    }
}

module.exports = connectDb;