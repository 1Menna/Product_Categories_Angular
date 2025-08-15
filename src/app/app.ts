import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../navbar/navbar";
import { Men } from '../men/men';
import { Women } from '../women/women';
import { Kids } from '../kids/kids';
import { Beauty } from '../beauty/beauty';
import { Games } from '../games/games';
import { Appliances } from '../appliances/appliances';
import { Electronics } from '../electronics/electronics';
import { Home } from '../home/home';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,Men,Women,Kids,Beauty,Games,Appliances,Electronics,Home,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProductCategories');
}
