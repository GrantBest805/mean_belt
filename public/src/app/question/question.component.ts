import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Array<any>;
  question = {
    question: ''
  }
  constructor(private _questionService: QuestionService, private _router: Router) { }

  ngOnInit() {
  }
  
  createQuestion(formData){
    this._questionService.createQuestion(formData.value)
    .then( (question) => {
      formData.reset()
      this._router.navigate(['/dashboard'])
      console.log(question)})
    .catch( (err) => this._router.navigate(['/login']))
  }
  clear(formData) {
    formData.reset()
  }

}
