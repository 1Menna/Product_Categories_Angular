import { Iproduct } from './../iproduct';
import { Component, OnInit } from '@angular/core';
import { SearchServ } from '../search-serv';
import { Cart } from '../cart';

@Component({
  selector: 'app-search-comp',
  imports: [],
  templateUrl: './search-comp.html',
  styleUrl: './search-comp.css'
})
export class SearchComp implements OnInit {

    results!:Iproduct[];

    constructor(public _searchServ:SearchServ , public _Cart:Cart){

    }

    ngOnInit() {
      this.results = this._searchServ.results;
    }

     
}
