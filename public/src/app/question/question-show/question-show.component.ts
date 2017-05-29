import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from './../question.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-question-show',
  templateUrl: './question-show.component.html',
  styleUrls: ['./question-show.component.css']
})
export class QuestionShowComponent implements OnInit {
    question_id: String;
    question: any;
  constructor(private _questionService: QuestionService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
    this.question_id = param.id;
    console.log(this.question_id)
  })
    this.getQuestion(this.question_id);
  }
  getQuestion(id) {
    this._questionService.getQuestion(id)
    .then( (question) => this.question = question)
    .catch( err => console.log(err))
  }
  like(id) {
    this._questionService.like(id)
    .then( status => this.getQuestion(this.question_id))
    .catch( err => console.log(err))
  }


}
