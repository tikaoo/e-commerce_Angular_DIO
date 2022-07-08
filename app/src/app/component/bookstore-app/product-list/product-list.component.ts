import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  livros:any;
  bookService : ProductListService

  constructor( bookService : ProductListService ) {
    this.bookService = bookService;

  }

  ngOnInit(): void {

    this.livros = this.bookService.getBook().subscribe((data => {
      this.livros =data;
      console.log(this.livros);
    }))
  }

}
