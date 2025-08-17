import { Iproduct } from './iproduct';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class Cart {
   count:number = 0;
   total_price:number = 0;

   added_products:(Iproduct)[]=[

   ];

   add_cart(obj:Iproduct):void{
      const productInCart = this.added_products.find(p => p.title === obj.title);

      if (!productInCart) {
        this.added_products.push({ ...obj, quantity: 1 }); // first time add
        this.count += 1;
        this.total_price+=obj.price;
        // sweetalert success
        Swal.fire({
          icon: 'success',
          title: 'Added to Cart successfully!',
          showConfirmButton: false,
          timer: 3900
        });
      } else {
          productInCart.quantity! += 1;   // increase quantity
          this.total_price+=obj.price;
          Swal.fire({
            icon: 'success',
            text: `Quantity increased to ${productInCart.quantity}`,
            showConfirmButton: false,
            timer: 3900
          });
      }
   }

   delete(x:string,y:number,z:number){
     this.added_products = this.added_products.filter(p => p.title !== x )
     this.count-=1;
     this.total_price-=y*z;
     Swal.fire({
          icon: 'success',
          title: 'Deleted Successfully!',
          showConfirmButton: false,
          timer: 3900
        });
   }
}
