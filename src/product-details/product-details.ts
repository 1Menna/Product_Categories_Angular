import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// ======================================================
import { appliances_products } from '../appliances/appliances';
import { beauty_products } from '../beauty/beauty';
import { electronics_products } from '../electronics/electronics';
import { fashion_products } from '../fashion/fashion';
import { games_products } from '../games/games';
import { Cart } from '../cart';
// ======================================================
@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit{
    constructor(private _ActivatedRoute:ActivatedRoute, public _Cart:Cart){
    }

    product_id! :string|null;
    category!: string | null;
    product: any = null;   // will hold the matched product

    ngOnInit():void{
      this._ActivatedRoute.paramMap.subscribe(
        {
          next:(productInfo)=>{
            this.product_id=productInfo.get("p_id"); 
            this.category=productInfo.get("category"); 
            if (this.product_id && this.category) {
                this.loadProduct(this.category, this.product_id);
            }
          },
          error:(eror)=>{console.log(eror);}
        }
      )
    }

    loadProduct(category: string, id: string) {
    let list: any[] = [];

    switch (category) {
      case 'electronics':
        list = electronics_products;
        break;
      case 'appliances':
        list = appliances_products;
        break;
      case 'beauty':
        list = beauty_products;
        break;
      case 'fashion':
        list = fashion_products;
        break;
      case 'games':
        list = games_products;
        break;
    }

    this.product = list.find(p => p.id === Number(id)) || null;
    console.log("Selected product:", this.product);
  }  

  // ================== for add to cart btn =====================
  add(id:number,category:string):void{
      switch (category){
        case "electronics":
          this._Cart.add_cart(electronics_products[id-1]);
          break;
        case "beauty":
          this._Cart.add_cart(beauty_products[id-1]);
          break;
        case "appliances":
          this._Cart.add_cart(appliances_products[id-1]);
          break;
        case "games":
          this._Cart.add_cart(games_products[id-1]);
          break;
        case "fashion":
          this._Cart.add_cart(fashion_products[id-1]);
          break;
      }
      
  }

}
