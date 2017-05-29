import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question/question.service';
import { AnswerComponent } from './answer/answer.component';
import { AnswerService } from './answer/answer.service';
import { QuestionShowComponent } from './question/question-show/question-show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    QuestionComponent,
    AnswerComponent,
    QuestionShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService, QuestionService, AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
