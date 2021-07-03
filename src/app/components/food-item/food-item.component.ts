import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class FoodItemComponent implements OnInit {
  @Input() item: Food;
  @Output() clicked = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

}
