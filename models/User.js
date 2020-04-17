const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: "string"
    },
    last_name: {
        type: "string"
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: 'string',
        required: false
    },
    position: {
        type: 'string',
        required: false
    },
    dob: {
        type: 'string',
        required: false
    },
    city: {
        type: 'string',
        required: false
    },
    state: {
        type: 'string',
        required: false
    },
    zip: {
        type: 'number',
        required: false
    },
    phonenumber: {
        type: 'number',
        required: false
    },
    address: {
        type: 'string',
        required: false
    },
    image: {
        type: 'string'
    }
})

module.exports = User = mongoose.model('users', UserSchema)