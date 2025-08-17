import { Iproduct } from './../iproduct';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Cart } from '../cart';
import { SearchServ } from '../search-serv';
 
//==================================================
import { appliances_products } from '../appliances/appliances';
import { beauty_products } from '../beauty/beauty';
import { electronics_products } from '../electronics/electronics';
import { fashion_products } from '../fashion/fashion';
import { games_products } from '../games/games';
import { FormsModule} from '@angular/forms';
//==================================================
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  
    constructor(public _Cart:Cart, public _Router:Router , public _SearchServ:SearchServ){
    }

    allItems:Iproduct[]=[
      ...appliances_products,
      ...fashion_products,
      ...games_products,
      ...electronics_products,
      ...beauty_products
    ]

    searchTerm:string = "";

    onSearch():void{
       if (!this.searchTerm.trim()) {return};

       const matches = this.allItems.filter(item =>
          item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
       );

       if (matches.length > 0) {
        this._SearchServ.results = matches;
        this._Router.navigate(['/search']);
       }else {
        alert("No results found!");
       }

    }


    

    
}
