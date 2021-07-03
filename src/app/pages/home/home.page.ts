import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';
import { Todo } from '../../models/todo.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todos: Todo[];
  todo: Todo;
  actionLabel: string;
  locations: any;

  categories: Category[] = [];
  foods: Food[] = [];

  constructor(private router: Router, private foodService: FoodService, private api: ApiService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getFoods();

    this.categories = [
      {
        id: 1,
        label: 'All',
        image: 'assets/images/icons/all.png',
        active: true,
      },
      {
        id: 2,
        label: 'Fast Food',
        image: 'assets/images/icons/burger.png',
        active: false,
      },
      {
        id: 3,
        label: 'Non Veg',
        image: 'assets/images/icons/dish.png',
        active: false,
      },
      {
        id: 4,
        label: 'Veg',
        image: 'assets/images/icons/sushi.png',
        active: false,
      },
    ];

    let listen = this.api.listenAll();
    // this.api.getTodos().then((data) => (this.todos = data.todos));
    this.api.getLocations().then((data) => (this.locations = data.location));
    this.clear();
  }

  goToFoodDetails(id: number) {
    // this.router.navigate(['detail', id]);
  }

  addTodo() {
    if (this.todo.id) {
      //Update if exists ID{
      this.update();
      return;
    }
    this.api
      .addTodo(this.todo)
      .then((payload) => {
        this.todos.push(payload.data[0]);
      })
      .catch((err) => console.log(`Error in add TODO ${err}`));
    this.clear();
  }

  edit(todo: Todo) {
    debugger
    this.todo = todo;
    this.actionLabel = 'UPDATE';
  }

  update() {
    this.api.update(this.todo).then(() => {
      let foundIndex = this.todos.findIndex((t) => t.id == this.todo.id);
      this.todos[foundIndex] = this.todo;
      this.clear();
    });
  }

  checkTodo(todoCheck: Todo) {
    todoCheck.done = !todoCheck.done;
    this.api.updateCheck(todoCheck);
  }

  delete(todo: Todo) {
    this.api
      .deleteTodo(todo.id)
      .then((res) => {
        (this.todos = this.arrayRemove(this.todos, todo.id));
      });

  }

  arrayRemove(arr: Todo[], id: string) {
    return arr.filter((ele) => ele.id != id);
  }

  clear() {
    this.todo = new Todo();
    this.actionLabel = 'ADD';
  }
}