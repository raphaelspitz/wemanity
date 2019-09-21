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
    if(this.bookService.editFlow === false)
      this.createAnEmptyForm();
    else
      this.createAnEditableForm();
  }

  createAnEmptyForm(){
  //  this.bookService.users = null;
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

  createAnEditableForm(){
    let formFields = this.bookService.users;

    this.form = this.formBuilder.group({
      firstname:formFields["firstname"],
      laststname:formFields["laststname"],
      phonenumber:formFields["phonenumber"]
    });

    this.bookService.users = null;

  }

  createOrEditUser(userData){

    if(this.bookService.editFlow === false)
      this.createUser(userData);
    else
      this.editUser(userData);
  }

  createUser(userData){
    this.bookService.addUser(userData).subscribe(data => {
      this.form.reset();
     });
  }

  editUser(userData){
  //  this.bookService.editUser(id,{"firstname":"edit1","laststname":"edit1","phonenumber":"edit"}).subscribe(data => {});
   let  id =   window.location.href.split('/');
   
    this.bookService.editUser(id[4],userData).subscribe(data => {
      this.form.reset();
     }); 

    this.bookService.editFlow = false;

  }

}
