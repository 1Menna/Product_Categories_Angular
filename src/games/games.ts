import { Component } from '@angular/core';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.html',
  styleUrl: './games.css'
})
export class Games {
  products:Iproduct[]=[
      {id:1,title:"Dancing And Recording Cactus Plush Toy With 120 Songs + USB Charging For Kids",price:130,category:"games",img:"/games/Dancing And Recording Cactus Plush Toy With 120 Songs_USB Charging For Kids.png"},
      {id:2,title:"First Aid Kit Doctor Prentend Play Toy Set Pink Color Portable 4+ Years Age Groups",price:350,category:"Laptop",img:"/games/First Aid Kit Doctor Prentend Play Toy Set Pink Color Portable 4+ Years Age Groups.png"},
      {id:3,title:"Tooth Extraction Crocodile Toy Parent Child Game Whole Person Toy",price:94,category:"games",img:"/games/Tooth Extraction Crocodile Toy Parent Child Game Whole Person Toy.png"},
      {id:4,title:"Rastar - Oracle Red Bull Racing RB18 118 With Remote Control - Black - 94800",price:2200,category:"games",img:"/games/Rastar - Oracle Red Bull Racing RB18 118 With Remote Control - Black - 94800.png"},
      {id:5,title:"Magnetic Sticks Balls and Rods Set, Building Blocks and Sticks Educational",price:784,category:"games",img:"/games/Magnetic Sticks Balls and Rods Set, Building Blocks and Sticks Educational.png"},
      {id:6,title:"3x3 Moyu MoFang JiaoShi Mini Magic Cube",price:70,category:"games",img:"/games/3x3 Moyu MoFang JiaoShi Mini Magic Cube.png"},
  ]
}