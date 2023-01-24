import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RoutingAuthModule } from './routing-auth-routing.module';
import { LoginInputComponent } from './components/login-input/login-input.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginInputComponent
  ],
  imports: [
    CommonModule,
    RoutingAuthModule,
    SharedModule
  ]
})
export class AuthModule { }
