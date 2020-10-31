import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Category } from '../../../Models/category'
import { stringify } from 'querystring';

@Component({
  selector: 'app-shopmain',
  templateUrl: './shopmain.component.html',
  styleUrls: ['./shopmain.component.css']
})
export class ShopmainComponent implements OnInit {

  constructor(private http: HttpClient) { }

  Categories: Category[] = [];

  ngOnInit() {
    this.getCategories().subscribe(data => {
      const categories = [];
      data.map(category => categories.push(new Category(category.categoryId, category.categoryName, category.orderCategory)));
      console.log(categories)
      this.Categories = categories;
    })
  }

  getCategories() {
    return this.http.get<Array<{categoryId:number, categoryName: string, orderCategory: number }>>('https://localhost:5001/api/Category/GetAll')
  }
}
