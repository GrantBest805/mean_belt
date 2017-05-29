import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionShowComponent } from './question/question-show/question-show.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'answer/:id', component: AnswerComponent},
    {path: 'dashboard/:id', component: QuestionShowComponent },
    { path: 'question', component: QuestionComponent, children: [
        
    ]},
       
   

];
export const routing = RouterModule.forRoot(APP_ROUTES);