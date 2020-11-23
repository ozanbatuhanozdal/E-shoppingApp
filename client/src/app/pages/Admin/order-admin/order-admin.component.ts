import { OrderService } from 'src/app/Services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/order';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

  constructor(private orderService: OrderService) { }
  Orders: Order[];
  ngOnInit() {
    this.getOrders();
  }

  getOrders()
  { this.orderService.getOrder().subscribe( orders => {
    console.log(orders);
    this.Orders = orders;                
  })
    
  }

}
