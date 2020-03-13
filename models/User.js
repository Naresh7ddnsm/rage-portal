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
        required: true
    },
    position: {
        type: 'string',
        required: true
    },
    dob: {
        type: 'string',
        required: true
    },
    city: {
        type: 'string',
        required: true
    },
    state: {
        type: 'string',
        required: true
    },
    zip: {
        type: 'number',
        required: true
    },
    phonenumber: {
        type: 'number',
        required: true
    },
    address: {
        type: 'string',
        required: true
    }
})

module.exports = User = mongoose.model('users', UserSchema)