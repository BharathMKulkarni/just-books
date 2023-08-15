import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../types/types';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

  @Input() 
  book: Book = {} as Book;

  @Output()
  emitBook = new EventEmitter<Book>();

  interval: any

  constructor(private cartService: CartService) {
    console.log('Book Constructor');
  }

  ngOnInit(): void {
    console.log('Book ngOnInit');
    // this.interval = setInterval(() => {
    //   console.log('Interval Hit');
    // },1000)
  }

  // called when the component is about to be mounted off the DOM
  ngOnDestroy(): void {
    console.log('Book onDestroy');
    // clearInterval(this.interval);
  }

  addToCart() {
    this.emitBook.emit(this.book);
    this.cartService.add(this.book);
  }

  findInCart() {
    return this.cartService.find(this.book);
  }

  removeFromCart() {
    this.cartService.remove(this.book);
  }
}
