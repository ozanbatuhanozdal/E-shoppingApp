import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Category } from './../../../../Models/category';
import { Product } from './../../../../Models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-admin-create',
  templateUrl: './product-admin-create.component.html',
  styleUrls: ['./product-admin-create.component.css']
})
export class ProductAdminCreateComponent implements OnInit {

  model:any = {};
  selectedFile = null;
  public progress: number;
  public message: string;

  constructor(private productService: ProductService,private categoryService: CategoryService,private router: Router,private toastr : ToastrService,private http: HttpClient) { }
  categories: Category[];
  ngOnInit() {
    this.getCategories()
  }


  addProduct(files)
  { 
    for (let file of files){
    console.log(file.path)
    this.model.productImageUrl=file.name
    }
    if(this.model.productImageUrl == null)
    {
      this.model.productImageUrl="productempty.jpg"
    }

    this.productService.addProduct(this.model).subscribe(response => {
      console.log(response);
      this.upload(files);
      this.toastr.success("Product Added");
      setTimeout(function () {
      this.router.navigateByUrl('/Admin/Product');
      }.bind(this), 2000);
    },error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  getCategories()
  {   
      this.categoryService.getCategories().subscribe( categorys => {
        console.log(categorys);
        this.categories = categorys;        
        
      }) 
  }

  upload(files) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', `https://localhost:5001/api/Product/UploadFile`, formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response)
        this.message = event.body.toString();
    });
  }

}
