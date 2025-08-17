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
      const exists = this.added_products.some(p => p.title === obj.title); // check by id

      if (!exists) {
        this.added_products.push(obj);
        this.count += 1;
      } else {
        alert("This product is already in your cart!");
      }
   }

   delete(x:string){
    console.log(this.added_products)
     this.added_products = this.added_products.filter(p => p.title !== x )
     console.log(this.added_products)
     this.count-=1;
   }
}
