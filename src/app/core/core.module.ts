import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialAppModule } from '../modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports:[
  ],
  exports:[
    CommonModule,
    MaterialAppModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
  ]
})
export class CoreAppModule { }
