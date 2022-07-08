import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';


export const books: Book[] = [
  { id: '1', name: 'Book1' , price: 10, quantity: 1, category: "Acao", img:"img1"},
  { id: '2', name: 'Book2' , price: 10, quantity: 1, category: "Acao", img:"img2"},
  { id: '3', name: 'Book3' , price: 10, quantity: 1, category: "Acao", img:"img3"},

];

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private readonly baseUrl = 'https://localhost:44382/api/bookstore';

  httpOptions ={
    Headers: new HttpHeaders({'content-type':'application/json'})
  }

  constructor(private http:HttpClient) { }

  getBook():Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl)
  }
}
