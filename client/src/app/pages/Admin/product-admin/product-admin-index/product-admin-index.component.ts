import { Category } from './../../../../Models/category';
import { ProductService } from 'src/app/Services/product.service';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../../../Models/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/Services/category.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-admin-index',
  templateUrl: './product-admin-index.component.html',
  styleUrls: ['./product-admin-index.component.css']
})
export class ProductAdminIndexComponent implements OnInit {

  Products: Product[];
  Categories: Category[];
  constructor(private http: HttpClient, private productService: ProductService, private router: Router, private toastr: ToastrService, private categoryService: CategoryService) { }

  ngOnInit() {

    this.getProducts();
    this.getCategories();
    this.test();

  }
  i: number
  j: number

  test() {
    for (this.i = 0; this.i < this.Products.length; this.i++) {
      for (this.j = 0; this.j < this.Categories.length; this.i++) {
        if (this.Products[this.i].categoryId == this.Categories[this.j].categoryId) {
          this.Products[this.i].category = this.Categories[this.j]
        }

      }

    }
  }



  getProducts() {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.Products = products;

    })

  }

  getCategories() {
    this.categoryService.getCategories().subscribe(categorys => {
      console.log(categorys);
      this.Categories = categorys;
    })

  }


  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(response => {
      console.log(response);
      this.toastr.success("Product Removed");
      setTimeout(function () {
        window.location.reload()
      }.bind(this), 2000);
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

}
