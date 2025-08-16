import { Component } from '@angular/core';
import { Iproduct } from '../iproduct';
import { RouterLink } from '@angular/router';
import { Cart } from '../cart';

export const appliances_products:Iproduct[]=[
        {id:1,title:"Foldable Laptop Table With Cup Holder Combination Material Multicolou",price:230,category:"Home & appliances",img:"/appliances/Foldable Laptop Table With Cup Holder Combination Material Multicolou.png"},
        {id:2,title:"2-Tier Dish Drying Storage Rack Black 800grams",price:480,category:"Home & appliances",img:"/appliances/2-Tier Dish Drying Storage Rack Black 800grams.png"},
        {id:3,title:"Travel Neck Pillow Memory Foam USA Travel Travel Pillow",price:360,category:"Home & appliances",img:"/appliances/Travel Neck Pillow Memory Foam USA Travel Travel Pillow.png"},
        {id:4,title:"Snooze, Satin Pillowcase for Hair and Skin, 4870 cm, Dark Pink",price:129,category:"Home & appliances",img:"/appliances/Snooze, Satin Pillowcase for Hair and Skin, 4870 cm, Dark Pink.png"},
        {id:5,title:"TP-Link Tapo C100 Indoor Home Security Wi-Fi Camera with Night Vision",price:980,category:"Home & appliances",img:"/appliances/TP-Link Tapo C100 Indoor Home Security Wi-Fi Camera with Night Vision.png"},
        {id:6,title:"20-LED Curtain Clip String Wall Light White",price:117,category:"Home & appliances",img:"/appliances/20-LED Curtain Clip String Wall Light White.png"},
         
]

@Component({
  selector: 'app-appliances',
  imports: [RouterLink],
  templateUrl: './appliances.html',
  styleUrl: './appliances.css'
})
export class Appliances {
     products = appliances_products ;

    constructor(private _Cart:Cart){
         
    }
    add(id:number):void{
        this._Cart.add_cart(appliances_products[id-1]);
    }
}
