import { Iproduct } from './iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cart {
   count:number = 0;

   added_products:(Iproduct)[]=[

   ];

   add_cart(obj:Iproduct):void{
    this.added_products.push(obj);
    this.count+=1;
   }

   delete(x:string){
     this.added_products = this.added_products.filter(p => p.title !== x )
     console.log(this.added_products)
     this.count-=1;
   }
}
