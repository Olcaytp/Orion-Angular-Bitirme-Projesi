import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import {Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[]{
    return [
      { name: 'All', count: 12},
      { name: 'FastFood', count: 5},
      { name: 'Pizza', count: 1},
      { name: 'Lunch', count: 12},
      { name: 'SlowFood', count: 2},
      { name: 'Hamburger', count: 1},
      { name: 'Fry', count: 1},
      { name: 'Soup', count: 1},
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    //statement?doJob1:doJob2
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[]{
    return [
      {
        id: 1,
        name: 'Kete',
        cookTime: '10-20',
        price: 5,
        favorite: false,
        origins: ['Turkiye'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood','Lunch', 'SlowFood'],
      },
      {
        id: 2,
        name: 'Pasta',
        cookTime: '15-25',
        price: 3,
        favorite: false,
        origins: ['Rome'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Lunch', 'SlowFood'],
      },
      {
        id: 3,
        name: 'Salad',
        cookTime: '11-22',
        price: 6,
        favorite: false,
        origins: ['Turkiye'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['Lunch'],
      },
      {
        id: 4,
        name: 'Pizza',
        cookTime: '10-15',
        price: 8.75,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 5,
        name: 'Lazania',
        cookTime: '10',
        price: 7.35,
        favorite: false,
        origins: ['Germany', 'USA'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['Lunch'],
      },
      {
        id: 6,
        name: 'Chicken',
        cookTime: '20',
        price: 4.95,
        favorite: false,
        origins: ['Venice'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['Lunch'],
      },
      {
        id: 7,
        name: 'Hamburger',
        cookTime: '8',
        price: 2.45,
        favorite: false,
        origins: ['USA', 'Germany'],
        stars: 1.5,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags: ['FastFood','Lunch', 'Hamburger'],
      },
      {
        id: 8,
        name: 'Meatball',
        cookTime: '17',
        price: 8.50,
        favorite: false,
        origins: ['Greece'],
        stars: 2.5,
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags: ['Lunch'],
      },
      {
        id: 9,
        name: 'Fried Patatoes',
        cookTime: '5',
        price: 1.50,
        favorite: false,
        origins: ['Sweeden'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-9.jpg',
        tags: ['FastFood', 'Lunch', 'Fry'],
      },
      {
        id: 10,
        name: 'Soup',
        cookTime: '6',
        price: 3.50,
        favorite: false,
        origins: ['Netherland'],
        stars: 4,
        imageUrl: '/assets/images/foods/food-10.jpg',
        tags: ['Soup', 'Lunch'],
      },
      {
        id: 11,
        name: 'Meat Doner',
        cookTime: '10',
        price: 5.50,
        favorite: false,
        origins: ['Greece'],
        stars: 5,
        imageUrl: '/assets/images/foods/food-11.jpg',
        tags: ['FastFood','Lunch'],
      },
      {
        id: 12,
        name: 'Iskender',
        cookTime: '17',
        price: 15.50,
        favorite: false,
        origins: ['Turkiye'],
        stars: 5,
        imageUrl: '/assets/images/foods/food-12.jpg',
        tags: ['Lunch'],
      }
    ]
  }
}
