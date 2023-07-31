const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    source: {
        type: String,
        required: true
    },
    record: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('File', fileSchema);
export {};