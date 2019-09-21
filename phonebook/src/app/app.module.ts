import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {NgxMaskModule} from 'ngx-mask'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    AddEditFormComponent,
    SearchResultComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
