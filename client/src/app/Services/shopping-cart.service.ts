import { ShoppingCartItem } from './../Models/ShoppingCartItem';
import { Injectable } from '@angular/core';
import {WishlistItem} from './../Models/WishlistItem';
const SHOPPING_CART_KEY = 'shopping-cart-data';
const WİSHLİST_CART_KEY = 'wishlist-data';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCartData: ShoppingCartItem[] = [];
  wishlistData: WishlistItem[]  =[]

  constructor() { 
    this.loadShoppingCart();
    this.loadWishlistCart();
  }

  private setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  private getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  private removeLocalStorage(key: string) {
    localStorage.removeItem(key);
  }



  addShoppingCartItem(item: ShoppingCartItem) {
    if (
      this.shoppingCartData.find(data => {
        return data.product.productId === item.product.productId;
      })
    ) {
      for (const i of this.shoppingCartData) {
        if (i.product.productId === item.product.productId) {
          i.quantity = i.quantity + item.quantity;
        }
      }
    } else {
      this.shoppingCartData = [...this.shoppingCartData, item];
    }
    console.log('item added:', this.shoppingCartData);
    this.setLocalStorage(SHOPPING_CART_KEY, this.shoppingCartData);   
  }

  private loadShoppingCart() {
    if (this.getLocalStorage(SHOPPING_CART_KEY)) {
      this.shoppingCartData = this.getLocalStorage(SHOPPING_CART_KEY);
    }
    console.log('SC Data from LocalStorage', this.shoppingCartData);
  }

 

  editShoppingCartItem(item: ShoppingCartItem) {
    this.shoppingCartData = this.shoppingCartData.map((data: ShoppingCartItem) => {
      if (data.product.productId === item.product.productId) {
        data = Object.assign({}, data, item);
      }
      return data;
    });
    console.log('item edited:', this.shoppingCartData);
    this.setLocalStorage(SHOPPING_CART_KEY, this.shoppingCartData);
  }

  deleteShoppingCartItem(item: ShoppingCartItem) {
    this.shoppingCartData = this.shoppingCartData.filter(
      data => !(data.product.productId === item.product.productId)
    );
    console.log('item removed:', this.shoppingCartData);
    this.setLocalStorage(SHOPPING_CART_KEY, this.shoppingCartData);   
  }

  addWishlistItem(item: WishlistItem) {
    if (
      this.wishlistData.find(data => {
        return data.product.productId === item.product.productId;
      })
    ) {
    } else {
      this.wishlistData = [...this.shoppingCartData, item];
    }
    console.log('item added:', this.wishlistData);
    this.setLocalStorage(WİSHLİST_CART_KEY, this.wishlistData);   
  }

  
  editWishlistItem(item: WishlistItem) {
    this.wishlistData = this.wishlistData.map((data: WishlistItem) => {
      if (data.product.productId === item.product.productId) {
        data = Object.assign({}, data, item);
      }
      return data;
    });
    console.log('item edited:', this.wishlistData);
    this.setLocalStorage(WİSHLİST_CART_KEY, this.wishlistData);
  }

  deleteWishlistItem(item: WishlistItem) {
    this.wishlistData = this.wishlistData.filter(
      data => !(data.product.productId === item.product.productId)
    );
    console.log('item removed:', this.wishlistData);
    this.setLocalStorage(WİSHLİST_CART_KEY, this.wishlistData);   
  }


  private loadWishlistCart(){
    if (this.getLocalStorage(WİSHLİST_CART_KEY)) {
      this.wishlistData = this.getLocalStorage(WİSHLİST_CART_KEY);
    }
    console.log('SC Data from LocalStorage', this.wishlistData);
  }  

}
