import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {BookService} from '../services/book.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss']
})
export class AddEditFormComponent implements OnInit {

  form : FormGroup;

  constructor(private formBuilder:FormBuilder, private bookService:BookService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.createAnEmptyForm();
  }

  createAnEmptyForm(){
      this.form = this.formBuilder.group({
        firstname:new FormControl('',Validators.required),
        laststname:new FormControl('',Validators.required),
        phonenumber:new FormControl('',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      )
      });
    }
  

  createOrEditUser(userData){
    this.createUser(userData);
  }

  createUser(userData){
    this.bookService.addUser(userData).subscribe(data => {
      this.form.reset();
     });
  }

}
