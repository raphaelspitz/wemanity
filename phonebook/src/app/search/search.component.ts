import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private bookService:BookService) { }

  ngOnInit() {
  }


  searchUsers(searchData){
    this.bookService.filterActive = true;
    console.log(this.bookService.filterActive)

    this.bookService.searchUser(searchData.search);
  }

  showAllUsers(){
    this.bookService.filterActive = false;
    console.log(this.bookService.filterActive)
    this.bookService.searchUser("");
  }

}
