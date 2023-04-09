import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';
import { College } from '../college';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-college',
  templateUrl: './update-college.component.html',
  styleUrls: ['./update-college.component.css']
})
export class UpdateCollegeComponent implements OnInit {

  collegName: string;
  college: College = new College();
  constructor(private collegeService: CollegeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.collegName = this.route.snapshot.params['collegeName'];

    this.collegeService.getCollegeBycollegeName(this.collegName).subscribe(data => {
      this.college = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.collegeService.updateCollege(this.collegName, this.college).subscribe( data =>{
      this.goToCollegeList();
    }
    , error => console.log(error));
  }

  goToCollegeList(){
    this.router.navigate(['/colleges']);
  }
}
