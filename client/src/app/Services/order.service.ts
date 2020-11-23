import { Order } from './../Models/order';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    order: Order[];
    baseUrl = environment.apiUrl

    constructor(private http: HttpClient) { }

    PlaceOrder(model: any) {
        console.log(model)
        return this.http.post(this.baseUrl + 'Order/', model).pipe(
            map((order: Order) => {
                console.log(order)
            })
        )
    }


    getOrder()
    {
        return this.http.get<Order[]>(this.baseUrl + 'Order/GetAll');
    }

    getUserOrder(id:string)
    { 
        console.log(id);
        return this.http.get<Order[]>(this.baseUrl + 'Order/' +  id)
    }
}