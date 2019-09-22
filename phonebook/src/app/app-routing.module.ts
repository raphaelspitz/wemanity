import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'useredit/:id', component:UserEditComponent},
  {path:'adduser', component:AddEditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
