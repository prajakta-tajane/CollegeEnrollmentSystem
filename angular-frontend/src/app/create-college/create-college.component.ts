import { Component, OnInit } from '@angular/core';
import { College } from '../college';
import { CollegeService } from '../college.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-College',
  templateUrl: './create-College.component.html',
  styleUrls: ['./create-College.component.css']
})
export class CreateCollegeComponent implements OnInit {

  college: College = new College();
  constructor(private collegeService: CollegeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCollege(){
    this.collegeService.createCollege(this.college).subscribe( data =>{
      console.log(data);
      this.goToCollegeList();
    },
    error => console.log(error));
  }

  goToCollegeList(){
    this.router.navigate(['/colleges']);
  }
  
  onSubmit(){
    console.log(this.college);
    this.saveCollege();
  }
}
