import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category-admin-edit',
  templateUrl: './category-admin-edit.component.html',
  styleUrls: ['./category-admin-edit.component.css']
})
export class CategoryAdminEditComponent implements OnInit {
  
  id:string
  categories: Category;


  constructor(private route: ActivatedRoute,private categoryService: CategoryService,private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getCategory()
  }
  getCategory()
  {
    this.categoryService.getCategory(this.id).subscribe( category => {
      this.categories = category
      console.log(this.categories)
    })

  }

  editCategory()
  {
    this.categoryService.editCategory(this.categories).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/');
    });
  }

}
