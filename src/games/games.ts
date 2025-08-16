import { Component } from '@angular/core';
import { Iproduct } from '../iproduct';
import { RouterLink } from '@angular/router';

export const games_products:Iproduct[]=[
      {id:1,title:"Nilco Twist And Turn Cylinder Pack",price:500,category:"games",img:"/games/Nilco Twist And Turn Cylinder Pack.png"},
      {id:2,title:"Mattel Playing Card Game MAT41001M",price:65,category:"games",img:"/games/Mattel Playing Card Game MAT41001M.png"},
      {id:3,title:"Tooth Extraction Crocodile Toy Parent Child Game Whole Person Toy",price:94,category:"games",img:"/games/Tooth Extraction Crocodile Toy Parent Child Game Whole Person Toy.png"},
      {id:4,title:"Rastar - Oracle Red Bull Racing RB18 118 With Remote Control - Black - 94800",price:2200,category:"games",img:"/games/Rastar - Oracle Red Bull Racing RB18 118 With Remote Control - Black - 94800.png"},
      {id:5,title:"Magnetic Sticks Balls and Rods Set, Building Blocks and Sticks Educational",price:784,category:"games",img:"/games/Magnetic Sticks Balls and Rods Set, Building Blocks and Sticks Educational.png"},
      {id:6,title:"3x3 Moyu MoFang JiaoShi Mini Magic Cube",price:70,category:"games",img:"/games/3x3 Moyu MoFang JiaoShi Mini Magic Cube.png"},
]

@Component({
  selector: 'app-games',
  imports: [RouterLink],
  templateUrl: './games.html',
  styleUrl: './games.css'
})
export class Games {
   products = games_products;
}