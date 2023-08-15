import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from 'src/types/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  getCartItems() {
    return this.cartService.get()
  }
}
