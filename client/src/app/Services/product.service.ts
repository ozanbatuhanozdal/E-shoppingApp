import { Product } from './../Models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product[];
  baseUrl = environment.apiUrl
  
  constructor(private http: HttpClient,private toastr : ToastrService,) { }


  getProducts()
  {
      return this.http.get<Product[]>(this.baseUrl + 'Product/GetAll')
  }

  getProduct(id)
  {
    return this.http.get<Product>(this.baseUrl + 'Product/' + id) 

  }


  getProductByCategoryId(id:string)
  {
    return this.http.get<Product[]>(this.baseUrl + 'Product/GetProductsByCategoryId/' + id)
  }


  addProduct(model:any)
  {
    console.log(model);
    return this.http.post(this.baseUrl + 'Product/',model).pipe(
      map((product: Product) => {       
      })
    );
  }

  deleteProduct(id:number)
  {
    return this.http.delete(this.baseUrl + 'Product/' +id).pipe(
      map((product: Product) => {
      })
    );
  }

  editProduct(model:any)
  {
    return this.http.put(this.baseUrl + 'Product/', model).pipe(
      map((product:Product) => {
        console.log(product)
      })
    )
  }

  }

