const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const imageSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
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
            type: Schema.Types.ObjectId,
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

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
