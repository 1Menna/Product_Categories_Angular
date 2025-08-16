import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Cart } from '../cart';
 

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  
    constructor(public _Cart:Cart){
      
    }
    
}
