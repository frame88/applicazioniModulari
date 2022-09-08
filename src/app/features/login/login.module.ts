import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { LostpassComponent } from './components/lostpass/lostpass.component';
import { RegistrationComponent } from './components/registration/registration.component';


@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    LostpassComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '',
        component: LoginComponent,
        children: [
          {path:'signin', component: SigninComponent},
          {path:'lostpass', component: LostpassComponent},
          {path:'registration', component: RegistrationComponent}
        ]
      }
    ])
  ]
})
export class LoginModule { }
