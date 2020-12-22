import { ToastrService } from 'ngx-toastr';
import { Product } from './../../../Models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  Product : Product;
  quantity = 1;

  constructor(private productService: ProductService,private shoppingcartService: ShoppingCartService,private toastr: ToastrService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getProduct()
  }



  getProduct()
  {
    this.productService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe( product => {
        console.log(product)
        this.Product = product
    })
  }

  addToCart() {
    this.shoppingcartService.addShoppingCartItem({
      product: this.Product,
      quantity: this.quantity,      
    });
    this.toastr.success("Ürün Karta Eklendi")    
  }

  addToWishlist(){
    this.shoppingcartService.addWishlistItem({
      product:this.Product
    });
  }


  quantityOnChange(event: number) {
    console.log('quantity value', event);
    this.quantity = event;
  }


}
