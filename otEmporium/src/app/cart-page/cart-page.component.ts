import { Food } from 'src/app/shared/models/Food';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  user:any=JSON.parse(localStorage.getItem('user'));
  cart!:Cart;
  OrderList: any;
  cartItems: any;
  prSer: any;
  constructor(private cartService:CartService,
    private foodService:FoodService) {
    let foods = foodService.getAll();
    // cartService.addToCart(foods[1]);
    // cartService.addToCart(foods[3]);
    // cartService.addToCart(foods[4]);
    this.setCart();
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }


  setCart() {
    this.cart = this.cartService.getCart();
  }
  myFunction() {
    window.alert("Order Completed");
  }

}
