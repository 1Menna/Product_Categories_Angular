import { Iproduct } from './../iproduct';
import { Component, OnInit } from '@angular/core';
import { SearchServ } from '../search-serv';
import { Cart } from '../cart';
import { Router, RouterLink } from '@angular/router';
 
//==================================================
import { appliances_products } from '../appliances/appliances';
import { beauty_products } from '../beauty/beauty';
import { electronics_products } from '../electronics/electronics';
import { games_products } from '../games/games';
import { fashion_products } from '../fashion/fashion';
import { FormsModule} from '@angular/forms';
//==================================================
@Component({
  selector: 'app-search-comp',
  imports: [RouterLink],
  templateUrl: './search-comp.html',
  styleUrl: './search-comp.css'
})
export class SearchComp implements OnInit{


    constructor(public _searchServ:SearchServ , public _Router:Router , public _Cart:Cart){

    }

    ngOnInit() {
    // if results is empty => navigate home
    if (!this._searchServ.results || this._searchServ.results.length === 0) {
      this._Router.navigate(['/']);
    }
  }

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
