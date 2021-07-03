import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { FoodItemComponent } from 'src/app/components/food-item/food-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CategoryComponent, FoodItemComponent]
})
export class HomePageModule {}
