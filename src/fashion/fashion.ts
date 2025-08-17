import { Component } from '@angular/core';
import { Iproduct } from '../iproduct';
import { RouterLink } from '@angular/router';
import { Cart } from '../cart';

export const fashion_products:Iproduct[]=[
  {id:1,title:"Mintra Unisex Jet Backpack With Laptop Pocket",price:400,category:"fashion",img:"/fashion/Mintra Unisex Jet Backpack With Laptop Pocket_400.jpg"},
  {id:2,title:"Mintra Unisex Printed School Bags 3 Pocket With Laptop Pocket",price:620,category:"fashion",img:"/fashion/Mintra Unisex Printed School Bags 3 Pocket With Laptop Pocket_620.jpg"},
  {id:3,title:"Mintra Unisex School Backpack 2 Pocket",price:160,category:"fashion",img:"/fashion/Mintra Unisex School Backpack 2 Pocket_160.jpg"},
  {id:4,title:"Mintra Unsiex Essential Bag",price:480,category:"fashion",img:"/fashion/Mintra Unsiex Essential Bag_480.jpg"},
  {id:5,title:"Mintra Unisex School Backpack 2 Pocket, Blue, 15 L",price:200,category:"fashion",img:"/fashion/Mintra Unisex School Backpack 2 Pocket, Blue, 15 L_200.jpg"},
  {id:6,title:"Mintra Unisex School Backpack 2 Pocket Large",price:180,category:"fashion",img:"/fashion/Mintra Unisex School Backpack 2 Pocket Large_190.jpg"},
  {id:7,title:"Mintra Unsiex Duffle Sport Bag, Grey",price:410,category:"fashion",img:"/fashion/Mintra Unsiex Duffle Sport Bag, Grey_410.jpg"},
]

@Component({
  selector: 'app-fashion',
  imports: [RouterLink],
  templateUrl: './fashion.html',
  styleUrl: './fashion.css'
})
export class Fashion {
    products=fashion_products;

    constructor(private _Cart:Cart){
    
    }
    add(id:number):void{
      this._Cart.add_cart(fashion_products[id-1]);
    }
}
