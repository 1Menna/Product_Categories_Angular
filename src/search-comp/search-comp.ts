import { Iproduct } from './../iproduct';
import { Component, OnInit } from '@angular/core';
import { SearchServ } from '../search-serv';
import { Cart } from '../cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-comp',
  imports: [],
  templateUrl: './search-comp.html',
  styleUrl: './search-comp.css'
})
export class SearchComp implements OnInit{


    constructor(public _searchServ:SearchServ , public _Router:Router ){

    }

    ngOnInit() {
    // if results is empty => navigate home
    if (!this._searchServ.results || this._searchServ.results.length === 0) {
      this._Router.navigate(['/']);
    }
  }
     

     
}
