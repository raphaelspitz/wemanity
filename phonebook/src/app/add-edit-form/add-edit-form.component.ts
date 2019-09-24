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
      firstname:new FormControl(formFields["firstname"],Validators.required),
      laststname:new FormControl(formFields["laststname"],Validators.required),
      phonenumber:new FormControl(formFields["phonenumber"],
      [
        Validators.required,
        Validators.minLength(10)
      ]
    )
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
   let id = window.location.href.split('/');
   
    this.bookService.editUser(id[4],userData).subscribe(data => {
      this.form.reset();
     }); 

    this.bookService.editFlow = false;
  }
  validateForError(form,fieldName) {
    console.log('----',fieldName);
    console.log('form.get',form.get(fieldName));
    if(form.get(fieldName).touched) {
        if(form.get(fieldName).value !== "") {
          return form.get(fieldName).invalid;
        }
       
    }  

  }
  
}
