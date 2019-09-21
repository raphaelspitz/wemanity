import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  users = {};
  searchResultSubject = new Subject();
  searchfield:string;
  BASE_URL = "http://localhost:3000";
  editFlow = false;

  constructor(private httpClient:HttpClient) { }

  searchUser(search){
    this.searchfield = search;
    this.httpClient.get(this.BASE_URL + '/api/users/search/'+search)
      .subscribe(res => {
        console.log(res);
      },err => {
        console.log(err);
      });
  }
}
