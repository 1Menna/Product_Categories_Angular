import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { Beauty } from '../beauty/beauty';
import { Games } from '../games/games';
import { Appliances } from '../appliances/appliances';
import { Electronics } from '../electronics/electronics';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,Beauty,Games,Appliances,Electronics,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProductCategories');
}
