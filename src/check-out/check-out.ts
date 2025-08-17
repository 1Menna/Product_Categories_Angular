import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-check-out',
  imports: [],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css'
})
export class CheckOut {
    constructor( public _Router:Router){
    }
    done(){
      Swal.fire({
        icon: 'success',
        text: `Your order has been placed successfully!`,
        showConfirmButton: false,
        timer: 3900
      });
      this._Router.navigate(['/']);
    }
}
