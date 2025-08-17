import { Iproduct } from './../iproduct';
import { Component } from '@angular/core';
import { Cart } from '../cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  imports: [RouterLink],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css'
})
export class ShoppingCart {
 

    constructor(public _:Cart){
       
    }

    del(x:string,y:number,z:number):void{
        this._.delete(x,y,z);
    }
}
