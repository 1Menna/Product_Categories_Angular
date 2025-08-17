import { Component } from '@angular/core';
import { Iproduct } from '../iproduct';
import { RouterLink } from '@angular/router';
import { Cart } from '../cart';

export const beauty_products:Iproduct[]=[
      {id:1,title:"Everyday Essentials Multi Use Brush Set Multicolour",price:120,category:"beauty",img:"/beauty/Everyday Essentials Multi Use Brush Set Multicolour.png"},
      {id:2,title:"LASH SENSATIONAL SKY HIGH MASCARA, BLACK",price:518,category:"beauty",img:"/beauty/LASH SENSATIONAL SKY HIGH MASCARA, BLACK.png"},
      {id:3,title:"Mohra Silky Rose For Women EDP 100ml",price:870,category:"beauty",img:"/beauty/Mohra Silky Rose For Women EDP 100ml.png"},
      {id:4,title:"KAYALI Sweet Diamond Pink Pepper 100 Deluxe 100 ml without box",price:1200,category:"beauty",img:"/beauty/KAYALI Sweet Diamond Pink Pepper 100 Deluxe 100 ml without box.png"},
      {id:5,title:"Don French Fragrance Roll On 6ml",price:154,category:"beauty",img:"/beauty/Don French Fragrance Roll On 6ml.png"},
      {id:6,title:"Elvive Extraordinary Hair Oil Treatment, Non-Sticky Serum For Dry Hair 100ml",price:380,category:"beauty",img:"/beauty/Elvive Extraordinary Hair Oil Treatment, Non-Sticky Serum For Dry Hair 100ml.png"},
]

@Component({
  selector: 'app-beauty',
  imports: [RouterLink],
  templateUrl: './beauty.html',
  styleUrl: './beauty.css'
})
export class Beauty {
    products = beauty_products;

    constructor(private _Cart:Cart){
        
    }
    add(id:number):void{
      this._Cart.add_cart(beauty_products[id-1]);
    }
}
