import { Routes } from '@angular/router';
import { Electronics } from './../electronics/electronics';
import { Appliances } from '../appliances/appliances';
import { Beauty } from '../beauty/beauty';
import { Games } from '../games/games';
import { Contact } from '../contact/contact';
import { Fashion } from '../fashion/fashion';
import { ProductDetails } from '../product-details/product-details';

export const routes: Routes = [
  { path: "electronics", component: Electronics, title: "electronics" },
  { path: "appliances", component: Appliances, title: "appliances" },
  { path: "beauty", component: Beauty, title: "beauty" },
  { path: "games", component: Games, title: "games" },
  { path: "fashion", component: Fashion, title: "fashion" },
  // ===========================================================
  { path: ":category/:p_id", component: ProductDetails , data: { renderMode: 'server'}},
  // ===========================================================
  { path: "contact", component: Contact, title: "contact" },
  { path: "", redirectTo: "electronics", pathMatch: "full" }
];
