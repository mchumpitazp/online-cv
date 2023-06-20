"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('Project', projectSchema);
// Version 1
/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    images: [
        {
            type: String,
            required: true,
        }
    ],
    category: {
        type: String,
        required: true
    },
    tools: [
        {
            type: String,
            required: true
        }
    ],
    description: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);
*/ 
