import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports:[
    MatInputModule
  ]
})
export class SharedModule { }
