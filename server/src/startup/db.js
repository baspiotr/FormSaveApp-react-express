import mongoose from 'mongoose';
import config from '../../config';

module.exports = async function() {
    const db = config.db.url;
    mongoose.set('useCreateIndex', true);
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Connected to ${db}...`);
    } catch (err) {
        console.log(err);
    }
};
