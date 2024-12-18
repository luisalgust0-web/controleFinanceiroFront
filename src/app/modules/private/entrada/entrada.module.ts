import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';



@NgModule({
  declarations: [
    FormComponent,
    GridComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EntradaModule { }
