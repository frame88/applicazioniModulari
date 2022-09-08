import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
