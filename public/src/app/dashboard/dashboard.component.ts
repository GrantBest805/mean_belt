import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login/login.service';
import { QuestionService } from './../question/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questions: Array<any>;
  question:{}
  user: any;
  constructor(
    private _loginService: LoginService,
    private _questionService: QuestionService,
    private _router: Router
    
  ) { }

  ngOnInit() {
    this.getCurrentUser()
    this.getQuestions()
  }

  getCurrentUser(){
    this._loginService.getCurrent()
    .then( (user) => this.user = user)
    .catch( (err) => this._router.navigate(['/login']))
  }
  getQuestions(){
    this._questionService.getQuestions()
    .then( (questions) => this.questions = questions)
    .catch( (err) => console.log(err))
  }
  // getQuestion(id) {
  //   this._questionService.getQuestion(id)
  //   .then( question => this.question = question)
  //   .catch( err => console.log(err))
  // }


}
