import { Component, OnInit } from '@angular/core';
import { Book } from '../../types/types';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  showBooks: boolean = false
  showBooksBtnTitle: string = 'Show Books'
  textField: string = ''
  books: Book[] = []
  cartItems: Book[] = []

  // Constructor always loads first before ngOnInit
  // Injecting BooksService class as a dependency for the BooksComponent class
  constructor(private booksService: BooksService) {
    console.log('constructor');  
  }

  // ngOnInit loads right after the constructor is called and the component
  // is ready to be mounted to the DOM
  ngOnInit(): void {
    console.log('ngOnInit');
    this.books = this.booksService.getBooks();
  }

  toggleBooks() {
    this.showBooks = !this.showBooks
    if(this.showBooks) this.showBooksBtnTitle = 'Hide Books'
    else this.showBooksBtnTitle = 'Show Books'
  }

  addBooktoCart(incomingBook: Book) {
    this.cartItems.push(incomingBook)
    console.log(this.cartItems)
  }

}
