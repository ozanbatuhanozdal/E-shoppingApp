import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category-admin-create',
  templateUrl: './category-admin-create.component.html',
  styleUrls: ['./category-admin-create.component.css']
})
export class CategoryAdminCreateComponent implements OnInit {

  model:any = {};
  constructor(private categoryService: CategoryService,private route:Router) { }

  ngOnInit(): void {
  }

  addCategory()
  {
    this.categoryService.addCategory(this.model).subscribe(response => {
      console.log(response);
      this.route.navigateByUrl('/');
    })    
  }

}
