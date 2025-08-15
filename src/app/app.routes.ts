import { Routes } from '@angular/router';
import { Electronics } from './../electronics/electronics';
import { Appliances } from '../appliances/appliances';
import { Beauty } from '../beauty/beauty';
import { Games } from '../games/games';
import { Kids } from '../kids/kids';
import { Men } from '../men/men';
import { Women } from '../women/women';
import { Contact } from '../contact/contact';
import { Home } from '../home/home';

export const routes: Routes = [
  { path: "electronics", component: Electronics, title: "electronics" },
  { path: "appliances", component: Appliances, title: "appliances" },
  { path: "beauty", component: Beauty, title: "beauty" },
  { path: "games", component: Games, title: "games" },
  { path: "kids", component: Kids, title: "kids" },
  { path: "men", component: Men, title: "men" },
  { path: "women", component: Women, title: "women" },
  { path: "contact", component: Contact, title: "contact" },
  { path: "home", component: Home, title: "home" },
  { path: "", redirectTo: "home", pathMatch: "full" }
];
