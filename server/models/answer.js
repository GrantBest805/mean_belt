let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AnswerSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    answer: {type:String, required:true},
    description: {type:String, required:false},
    likes: {type:Number, default:0},
}, {timestamps:true})

var User = mongoose.model('Answer', AnswerSchema);