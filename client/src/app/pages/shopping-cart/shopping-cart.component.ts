import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ShoppingCartItem } from 'src/app/Models/ShoppingCartItem';
import { ProductService } from 'src/app/Services/product.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  data: ShoppingCartItem[] = [];
  // order summary
  subTotal = 0;
  shippingFee = 50;
  taxPercentage = 5; // 5%
  tax = 0;
  total = 0;
  quantity = 1;
  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit() {

    this.data = this.shoppingService.shoppingCartData;
    this.getOrderSummary();
  }

  quantityOnChange(event: number) {
    console.log('quantity value', event);
    this.quantity = event;
  }

  updateItem(item: ShoppingCartItem) {
    this.shoppingService.editShoppingCartItem(item);
    this.getOrderSummary();
  }

  removeItem(item: ShoppingCartItem) {
    this.shoppingService.deleteShoppingCartItem(item);
    this.data = this.shoppingService.shoppingCartData;
    this.getOrderSummary();
  }

  getTotalPrice(item: ShoppingCartItem) {
    return item.quantity * +item.product.productPrice;

  }

  getOrderSummary() {
    this.subTotal = 0;
    for (const i of this.data) {
      this.subTotal = this.subTotal + +i.product.productPrice * i.quantity;
    }
  }

}

