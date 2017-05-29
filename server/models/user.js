let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
    name: {type:String, required:true},
}, {timestamps:true})

var User = mongoose.model('User', UserSchema);