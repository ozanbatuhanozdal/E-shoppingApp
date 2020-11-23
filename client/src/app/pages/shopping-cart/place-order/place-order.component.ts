import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  model: any = {};
  myDate = new Date();
  sumPrice = 0;
  constructor(private orderService: OrderService, private datePipe: DatePipe, private router: Router, private toastr: ToastrService, private http: HttpClient) { }

  ngOnInit() {
  }

  PlaceOrder() {
    this.getTotalSum()
    this.model.OrderDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd')
    this.model.CustomerName = JSON.parse(localStorage.getItem('user')).firstname
    this.model.CustomerEmail = JSON.parse(localStorage.getItem('user')).email
    this.model.CustomerAdress = JSON.parse(localStorage.getItem('user')).adress
    this.model.UserId = JSON.parse(localStorage.getItem('user')).userId
    this.model.TotalPrice = this.sumPrice

    this.orderService.PlaceOrder(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/');
      localStorage.removeItem('shopping-cart-data');
    }, error => {
      console.log(error);
      this.toastr.error('Purchase Failed');
    })
  }
  getTotalSum() {
    var values = JSON.parse(localStorage.getItem("shopping-cart-data"));
    values.forEach((item) => {
      this.sumPrice = this.sumPrice + (item.product.productPrice * item.quantity)
    })
  }
}
