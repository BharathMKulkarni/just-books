import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookComponent } from '../book/book.component';
import { FormsModule } from '@angular/forms';
import { BooksService } from './books.service';


@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [BooksService],
  exports: [BooksComponent]
})
export class BooksModule { }
