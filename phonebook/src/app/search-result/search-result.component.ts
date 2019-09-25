import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor(private bookService:BookService,private _router: Router) { }
  users = [];
  showMessageForLastUserCreated:boolean;
  ngOnInit() {
    if(this.bookService.lastUserCreated){
      this.showMessageForLastUserCreated = true;
      this.users.push(this.bookService.lastUserCreated);
    }
   
    this.bookService.searchResultSubject
      .subscribe(data => {
        this.handleSearchResult(data);
      });
  }

  getUserIdandEditIt(id){
    this.bookService.getUserById(id).subscribe(res => {
     this.bookService.editFlow = true;
      this.bookService.users = res;
      this._router.navigateByUrl("/useredit/"+id);
    });
  }

  deleteUserByID(id,index){
    this.bookService.deleteUser(id).subscribe(res => {
      this.users.splice(index,1);
     });
  }

  filterTheArray(data){

    let filteredUsers = data.filter( element =>
      element.firstname.toLowerCase().indexOf(this.bookService.searchfield.toLowerCase()) != -1  ||
      element.laststname.toLowerCase().indexOf(this.bookService.searchfield.toLowerCase()) != -1  ||
      element.phonenumber.toLowerCase().indexOf(this.bookService.searchfield.toLowerCase()) != -1 
    );

    this.users = filteredUsers;
  }

  handleSearchResult(data){
    this.showMessageForLastUserCreated = false;

    if(!this.bookService.filterActive){
      this.users = data;
    }
    else{
      this.filterTheArray(data)
    }
  }
}
