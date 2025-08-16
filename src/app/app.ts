import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { Beauty } from '../beauty/beauty';
import { Games } from '../games/games';
import { Appliances } from '../appliances/appliances';
import { Electronics } from '../electronics/electronics';
import { Contact } from '../contact/contact';
import { ShoppingCart } from '../shopping-cart/shopping-cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,Beauty,Games,Appliances,Electronics,Contact,ShoppingCart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProductCategories');
}
