const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserUpdateSchema = new Schema({
    firstname: {
        type: "string"
    },
    lastname: {
        type: "string"
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
        type: Date,
        default: Date.now,
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

module.exports = UserUpdate = mongoose.model('users', UserUpdateSchema)