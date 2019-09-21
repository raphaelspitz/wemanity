import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'adduser', component:AddEditFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
