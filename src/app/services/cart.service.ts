import { Injectable } from '@angular/core';
import { BooksService } from '../books/books.service';
import { Book } from 'src/types/types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Book[] = []

  constructor(private booksService: BooksService) { }

  add(book: Book) {
    this.cartItems.push(book)
  }

  remove(book: Book) {
    this.cartItems = this.cartItems.filter((b) => b!= book)
  }

  get() {
    return this.cartItems
  }

  find(book: Book): boolean {
    return this.cartItems.includes(book)
  }
}
