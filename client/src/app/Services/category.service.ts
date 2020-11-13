import { environment } from './../../environments/environment';
import { Category } from './../Models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  Categories: Category[];
  baseUrl = environment.apiUrl
  
  constructor(private http: HttpClient) { }

  getCategories()
  {
      return this.http.get<Category[]>(this.baseUrl + 'Category/GetAll')
  }

  getCategory(id)
  {
    return this.http.get<Category>(this.baseUrl + 'Category/' + id) 

  }

  deleteCategory(id:number)
  {
    return this.http.delete(this.baseUrl + 'Category/' +id).pipe(
      map((category: Category) => {
        console.log(category);
      })
    );
  }

  addCategory(model:any)
  {
    console.log(model);
    return this.http.post(this.baseUrl + 'Category/AddCategory',model).pipe(
      map((category: Category) => {
        console.log(category);
      })
    );
  }

  editCategory(model:any)
  {
    return this.http.put(this.baseUrl + 'Category/', model).pipe(
      map((category:Category) => {
        console.log(category)
      })
    )
  }
}
