import { Iproduct } from './iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchServ {
    results:Iproduct[] = [];
    
}
