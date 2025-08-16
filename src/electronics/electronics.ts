import { RouterLink } from '@angular/router';
import { Iproduct } from './../iproduct';
import { Component } from '@angular/core';

export const electronics_products:Iproduct[]=[
    {id:1,title:"ASUS Vivobook S 14 Flip, AMD Ryzen 7 7730U",price:15000,category:"Laptop",img:"/electronic/ASUS Vivobook S 14 Flip, AMD Ryzen 7 7730U.jpg"},
    {id:2,title:"HP 15-GW Laptop - Ryzen 3 3250U 2-Cores, 8 GB RAM",price:9000,category:"Laptop",img:"/electronic/HP 15-GW Laptop - Ryzen 3 3250U 2-Cores, 8 GB RAM.jpg"},
    {id:3,title:"Lenovo IdeaPad Slim 3 15IRH8 Laptop - 13th Intel Core i7-13620H",price:9000,category:"Laptop",img:"/electronic/Lenovo IdeaPad Slim 3 15IRH8 Laptop - 13th Intel Core i7-13620H.jpg"},
    {id:4,title:"Apple Macbook Air 2020 Model, (13-Inch, Apple M1 chip with 8-core CPU",price:39000,category:"Laptop",img:"/electronic/Apple Macbook Air 2020 Model, (13-Inch, Apple M1 chip with 8-core CPU.jpg"},
    {id:5,title:"Lenovo LOQ 15IRX9 Gaming Laptop - 13th Intel Core i7-13650HX, 16GB DDR5 RAM, 1TB SSD, AI Chip",price:47000,category:"Laptop",img:"/electronic/Lenovo LOQ 15IRX9 Gaming Laptop - 13th Intel Core i7-13650HX, 16GB DDR5 RAM, 1TB SSD, AI Chip.jpg"},
    {id:6,title:"MSI Thin 15 B13UCi7-13620H RTX 3050 4GB 16GB RAM DDR4 3200Mhz ",price:34000,category:"Laptop",img:"/electronic/MSI Thin 15 B13UCi7-13620H RTX 3050 4GB 16GB RAM DDR4 3200Mhz .jpg"},
]

@Component({
  selector: 'app-electronics',
  imports: [RouterLink],
  templateUrl: './electronics.html',
  styleUrl: './electronics.css'
})
export class Electronics {
    products = electronics_products;
}
