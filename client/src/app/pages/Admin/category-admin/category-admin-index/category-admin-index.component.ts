import { Router } from '@angular/router';
import { Category } from './../../../../Models/category';
import { Product } from './../../../../Models/product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-admin-index',
  templateUrl: './category-admin-index.component.html',
  styleUrls: ['./category-admin-index.component.css']
})
export class CategoryAdminIndexComponent implements OnInit {

  id:string;
  Products: Product[];
  categories: Category[];
 
  constructor(private toastr : ToastrService,private http: HttpClient,private productService: ProductService,private categoryService:CategoryService,private router:Router) { }
  
  ngOnInit() {

    this.getCategories();
  }


  getProducts()
  {   
    this.productService.getProducts().subscribe( products => {
      console.log(products);
      this.Products = products;
      
    })

  }

  getCategories()
  {
      this.categoryService.getCategories().subscribe( categorys => {
        console.log(categorys);
        this.categories = categorys;                
      })
 
  }

  deleteCategory(id:number)
  {
    this.categoryService.deleteCategory(id).subscribe(response => {
      console.log(response);
      this.toastr.success("Category Removed");
      setTimeout(function () {
        window.location.reload()
      }.bind(this), 2000);
    },error => { 
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  
}
