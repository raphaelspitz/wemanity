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
  constructor(private httpClient:HttpClient) {}

   getBookList(){
     return  this.httpClient.get(this.BASE_URL + '/api/users');
   }

    getUserById(id){
    return  this.httpClient.get(this.BASE_URL + '/api/users/'+id);
  }

  searchUser(search){
    this.searchfield = search;
    this.httpClient.get(this.BASE_URL + '/api/users/search/'+search)
      .subscribe(res => {
        return this.searchResultSubject.next(res);
      },err => {
        console.log(err);
      });
  }

   addUser(userData){
    return this.httpClient.post(this.BASE_URL + '/api/users', userData);
   }

   editUser(id,userData){
    return this.httpClient.put(this.BASE_URL + '/api/users/'+id, userData);
   }

   deleteUser(id){
    return this.httpClient.delete(this.BASE_URL + '/api/users/'+ id);
   }

}
