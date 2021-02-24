const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;

const imagesSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    location: {
        type: String,
    },

    title: {
        type: String,
    },

    description: {
        type: String,
    },

    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tag',
        },
    ],

    free: {
        type: Boolean,
    },

    price: {
        type: Currency,
    },

    creationDate: {
        type: Date,
        default: Date.now,
    },
});

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;
