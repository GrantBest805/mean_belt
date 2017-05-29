import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }

  getQuestions(){
    return this._http.get('/api/questions')
    .map( (questions: Response) => questions.json())
    .toPromise()
  }
  createQuestion(question){
    return this._http.post('/api/questions', question)
    .map( (messages: Response) => messages.json())
    .toPromise()
  }
  getQuestion(id) {
    return this._http.get('/api/questions/' + id).map((question: Response) => question.json()).toPromise()
  }
  like(id) {
    return this._http.get('/api/answers/' + id).map((answer: Response) => answer.json()).toPromise()
  }


}
