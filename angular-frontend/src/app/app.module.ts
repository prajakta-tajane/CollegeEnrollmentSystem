import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CreateCollegeComponent } from './create-college/create-college.component';
import { FormsModule} from '@angular/forms';
import { UpdateCollegeComponent } from './update-college/update-college.component';
import { CollegeDetailsComponent } from './college-details/college-details.component'

@NgModule({
  declarations: [
    AppComponent,
    CollegeListComponent,
    CreateCollegeComponent,
    UpdateCollegeComponent,
    CollegeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
