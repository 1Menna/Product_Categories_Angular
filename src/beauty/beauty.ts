import { Component } from '@angular/core';
import { Iproduct } from '../iproduct';
import { RouterLink } from '@angular/router';

export const beauty_products:Iproduct[]=[
      {id:1,title:"Everyday Essentials Multi Use Brush Set Multicolour",price:120,category:"MakeUp",img:"/beauty/Everyday Essentials Multi Use Brush Set Multicolour.png"},
      {id:2,title:"LASH SENSATIONAL SKY HIGH MASCARA, BLACK",price:518,category:"MakeUp",img:"/beauty/LASH SENSATIONAL SKY HIGH MASCARA, BLACK.png"},
      {id:3,title:"Mohra Silky Rose For Women EDP 100ml",price:870,category:"MakeUp",img:"/beauty/Mohra Silky Rose For Women EDP 100ml.png"},
      {id:4,title:"KAYALI Sweet Diamond Pink Pepper 100 Deluxe 100 ml without box",price:1200,category:"MakeUp",img:"/beauty/KAYALI Sweet Diamond Pink Pepper 100 Deluxe 100 ml without box.png"},
      {id:5,title:"Don French Fragrance Roll On 6ml",price:154,category:"MakeUp",img:"/beauty/Don French Fragrance Roll On 6ml.png"},
      {id:6,title:"Elvive Extraordinary Hair Oil Treatment, Non-Sticky Serum For Dry Hair 100ml",price:380,category:"MakeUp",img:"/beauty/Elvive Extraordinary Hair Oil Treatment, Non-Sticky Serum For Dry Hair 100ml.png"},
]

@Component({
  selector: 'app-beauty',
  imports: [RouterLink],
  templateUrl: './beauty.html',
  styleUrl: './beauty.css'
})
export class Beauty {
    products = beauty_products;
}
