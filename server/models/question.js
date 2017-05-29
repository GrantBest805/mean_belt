let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let QuestionSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'}, 
    question: {type:String, required:true},
    description: {type:String, required:false},
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}], 
}, {timestamps:true})

var User = mongoose.model('Question', QuestionSchema);