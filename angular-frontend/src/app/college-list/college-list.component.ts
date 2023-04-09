import { Component, OnInit } from '@angular/core';
import { College } from '../college'
import { CollegeService } from '../college.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {

  colleges: College[];

  constructor(private collegeService: CollegeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getColleges();
  }

  private getColleges(){
    this.collegeService.getCollegesList().subscribe(data => {
      this.colleges = data;
    });
  }

  collegeDetails(collegeName: string){
    this.router.navigate(['college-details', collegeName]);
  }

  updateCollege(collegeName: string){
    this.router.navigate(['update-college', collegeName]);
  }

  deleteCollege(collegeName: string){
    this.collegeService.deleteCollege(collegeName).subscribe( data => {
      console.log(data);
      this.getColleges();
    })
  }
}
