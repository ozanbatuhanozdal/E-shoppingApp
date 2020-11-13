import { Product } from './../../../../Models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { CategoryService } from 'src/app/Services/category.service';
import { Category } from 'src/app/Models/category';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-admin-edit',
  templateUrl: './product-admin-edit.component.html',
  styleUrls: ['./product-admin-edit.component.css']
})
export class ProductAdminEditComponent implements OnInit {
  
  id: string
  product: Product
  categories: Category[];

  constructor(private route: ActivatedRoute,private productService : ProductService,private categoryService:CategoryService,private router: Router,private toastr:ToastrService) { }
  ngOnInit(){

    this.id = this.route.snapshot.paramMap.get('id')
    this.getProduct()
    this.getCategories()
  }


  getProduct()
  {
    this.productService.getProduct(this.id).subscribe( product => {
      this.product = product
      console.log(this.product)
    })

  }
  getCategories()
  {
      this.categoryService.getCategories().subscribe( categorys => {
        console.log(categorys);
        this.categories = categorys;                
      })
 
  }

  updateProduct()
  {    
    this.productService.editProduct(this.product).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('Product');
    },error => {
      console.log(error);
      this.toastr.error(error.error);
    })

  }  
}
