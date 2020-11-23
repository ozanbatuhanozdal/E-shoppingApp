import { OrderService } from 'src/app/Services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/order';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  orders: Order[]
  id: string
  constructor(private orderService: OrderService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    this.getUserOrder();
        
  }


  getUserOrder()
  {
    this.orderService.getUserOrder(this.id).subscribe( order => {      
      console.log(order)
      this.orders = order
  })
  }

}
