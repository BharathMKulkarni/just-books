import { Injectable } from '@angular/core';
import { Book } from '../../types/types';


// Injectable decorator makes a class as a service which will be a part of the root context in this case
// A service is just a normal class that is intended to perform a specific set of operations used by the component(s)
@Injectable()
export class BooksService {
  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C Martin',
      image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL._SX260_.jpg',
      price: 500
    },
    {
      name: 'Pragmattic Programmer',
      author: 'David Thomas',
      image: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
      price: 650
    },
    {
      name: 'Head First Design Patterns',
      author: 'Eric Freeman',
      image: 'https://m.media-amazon.com/images/I/51rmlxN57sL.jpg',
      price: 800
    }
  ]
  constructor() { }

  getBooks() {
    return this.books
  }
}
