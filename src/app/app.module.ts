import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StyledCardsComponent } from './cards/styled-cards/styled-cards.component';
import { UnstyledCardsComponent } from './cards/unstyled-cards/unstyled-cards.component';
import { ChartCardComponent } from './cards/chart-card/chart-card.component';
import { MapCardComponent } from './cards/map-card/map-card.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

//Agent
import { AgentComponentComponent } from './agent/agent-component/agent-component.component';
import { AgentCreateComponent } from './agent/create/create.component';
import { UpdateComponent as AgentUpdateComponent } from './agent/update/update.component';

//User
import { CreateComponent as UserCreateComponent } from './user/create/create.component';
import { UpdateComponent as UserUpdateComponent } from './user/update/update.component';
import { ManageComponent as UserManageComponent } from './user/manage/manage.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignupComponent } from './auth/signup/signup.component';

library.add(fas, far);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StyledCardsComponent,
    UnstyledCardsComponent,
    ChartCardComponent,
    MapCardComponent,
    HeaderComponent,
    AgentComponentComponent,
    AgentCreateComponent,
    AgentUpdateComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserManageComponent,
    SigninComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ChartsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
