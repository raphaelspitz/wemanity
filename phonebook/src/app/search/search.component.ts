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
    alert('searchUsers');
    this.bookService.searchUser(searchData.search);
  }

}
