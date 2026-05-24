const mongoose = require('mongoose');
const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    active: Boolean,
}, "User");

module.exports = User;