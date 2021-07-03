import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({ providedIn: 'root' })
export class FoodService {

  getFoods(): Food[] {
    return [
      {
        id: 1,
        name: 'Sea Food',
        price: 12,
        imageURL: 'assets/images/foods/seafood-dishes.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 2,
        name: 'Hamburger',
        price: 21,
        imageURL: 'assets/images/foods/hamburger.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 3,
        name: 'Mussels',
        price: 16,
        imageURL: 'assets/images/foods/mussel.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 4,
        name: 'Pizza',
        price: 20,
        imageURL: 'assets/images/foods/pizza.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 5,
        name: 'Breakfast',
        price: 10,
        imageURL: 'assets/images/foods/scott-ish-breakfast.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 6,
        name: 'Tambi',
        price: 13,
        imageURL: 'assets/images/foods/tambi.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
