import { NgModule } from '@angular/core';
import { CoreAppModule } from '../core/core.module';



@NgModule({
  declarations: [],
  imports: [
    CoreAppModule
  ],
  exports:[
    CoreAppModule
  ]
})
export class SharedModule { }
