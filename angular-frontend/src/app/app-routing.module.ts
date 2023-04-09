import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeListComponent } from './college-list/college-list.component';
import { CreateCollegeComponent } from './create-college/create-college.component';
import { UpdateCollegeComponent } from './update-college/update-college.component';
import { CollegeDetailsComponent } from './college-details/college-details.component';

const routes: Routes = [
  {path: 'colleges', component: CollegeListComponent},
  {path: 'create-college', component: CreateCollegeComponent},
  {path: '', redirectTo: 'colleges', pathMatch: 'full'},
  {path: 'update-college/:collegeName', component: UpdateCollegeComponent},
  {path: 'college-details/:collegeName', component: CollegeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
