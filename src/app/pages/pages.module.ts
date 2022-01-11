import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    MainComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent,
    CategoriesComponent
  ]
})
export class PagesModule { }
