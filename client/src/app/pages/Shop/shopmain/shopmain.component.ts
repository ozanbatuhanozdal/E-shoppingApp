import { ProductService } from './../../../Services/product.service';
import { Product } from './../../../Models/product';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../../Models/category'
import { stringify } from 'querystring';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-shopmain',
  templateUrl: './shopmain.component.html',
  styleUrls: ['./shopmain.component.css']
})
export class ShopmainComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private categoryService: CategoryService,
    private route:ActivatedRoute,
    private domSanitizier: DomSanitizer) { }

  Categories: Category[];
  Products: Product[];
  id: string;
  public ImgUrl = ' ';

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    if(this.id == null)
    {
      this.getProducts()

    }
    else {
      this.getProductsByCategoryId(this.id)
    }
    this.getCategories()

  }

  getCategories()
  {
      this.categoryService.getCategories().subscribe( categorys => {
        console.log(categorys);
        this.Categories = categorys;                
      })
 
  }

  getProducts()
  {   
    this.productService.getProducts().subscribe( products => {
      console.log(products);      
      this.Products = products;                
    })

  }

  getSafeUrl(url:string)
  {
    return this.domSanitizier.bypassSecurityTrustUrl(url);

  }

  getProductsByCategoryId(id:string)
  {   
    this.productService.getProductByCategoryId(id).subscribe( product => {
      console.log(product);
      this.Products = product;
      
    })
  }
 

}
