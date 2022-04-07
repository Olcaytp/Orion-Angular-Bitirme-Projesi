import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart() ;

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  itemDelete= new Subject<boolean>();
  allDelete= new Subject<boolean>();

  constructor(private http:HttpClient) { }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId:number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
  }

  changeQuantity(foodId:number, quantity:number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart {
    return this.cart;
  }
  pay(user:any){
    return this.http.post("http://localhost:3000/pay/",user);
  }

  clearCart(id:any){

    return this.http.delete("http://localhost:3000/cart/"+id);

  }
}
