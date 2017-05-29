import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class AnswerService {

  constructor(private _http: Http) { }

  createAnswer(answer, id){
    return this._http.post('/api/answers/' + id, answer)
    .map( (response: Response) => response.json())
    .toPromise()
  }

}
