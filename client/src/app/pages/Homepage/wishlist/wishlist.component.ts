import { WishlistItem } from './../../../Models/WishlistItem';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  data: WishlistItem[] = [];
  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit() {

    this.data = this.shoppingService.wishlistData;    
  }



  updateItem(item: WishlistItem) {
    this.shoppingService.editWishlistItem(item);
   
  }

  removeItem(item: WishlistItem) {
    this.shoppingService.deleteWishlistItem(item);
    this.data = this.shoppingService.wishlistData;    
  }
 

}
