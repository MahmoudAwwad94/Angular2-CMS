import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
//Agent
import { AgentCreateComponent } from './agent/create/create.component';
import { UpdateComponent as AgentUpdateComponent } from './agent/update/update.component';
import { AgentComponentComponent } from './agent/agent-component/agent-component.component';
//User
import { CreateComponent as UserCreateComponent } from './user/create/create.component';
import { UpdateComponent as UserUpdateComponent } from './user/update/update.component';
import { ManageComponent as UserManageComponent } from './user/manage/manage.component';
//Auth
import { SigninComponent } from './auth/signin/signin.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  {
    path: 'agent',
    children: [
      { path: 'create', component: AgentCreateComponent },
      { path: 'update/:id', component: AgentUpdateComponent },
      { path: 'manage', component: AgentComponentComponent },
    ]
  },
  {
    path: 'user',
    children: [
      { path: 'create', component: UserCreateComponent },
      { path: 'update/:id', component: UserUpdateComponent },
      { path: 'manage', component: UserManageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
