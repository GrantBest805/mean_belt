import { Component, OnInit } from '@angular/core';
import { AnswerService } from './answer.service';
import { LoginService } from './../login/login.service';
import { QuestionService } from './../question/question.service';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  question_id: String;
  question: any;
  answer = {
    answer: ''
  }
  constructor(
    private _answerService: AnswerService, 
    private _router: Router, private _route: ActivatedRoute, 
    private _questionService: QuestionService) { }
  
  ngOnInit() {
    this._route.params.subscribe((param)=>{
    this.question_id = param.id;
    console.log(this.question_id)
  })
 
  this.getQuestion(this.question_id);
  
  }
  createAnswer(formData, question_id){
    this._answerService.createAnswer(formData.value, question_id)
    .then( (answer) => {
      formData.reset()
      this._router.navigate(['/dashboard/', question_id ])
    })
    .catch( (err) => this._router.navigate(['/login']))
  }
  getQuestion(id) {
    this._questionService.getQuestion(id)
    .then( (question) => this.question = question)
    .catch( err => console.log(err))
  }
  clear(formData) {
    formData.reset()
  }

}
