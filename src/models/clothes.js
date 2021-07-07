'use strict';
const mongoose = require('mongoose');


const clothesSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
});

const ClothesModel = mongoose.model('clothes', clothesSchema)

module.exports = ClothesModel;