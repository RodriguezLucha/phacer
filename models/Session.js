const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const SessionSchema = new Schema({
    sesh: {
        type: String,
        required: false,
        unique: true
    }
});

module.exports = Sesh = model('sesh', SessionSchema);
