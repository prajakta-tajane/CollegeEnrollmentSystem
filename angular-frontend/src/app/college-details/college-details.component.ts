import { Component, OnInit } from '@angular/core';
import { College } from '../college';
import { ActivatedRoute } from '@angular/router';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.css']
})
export class CollegeDetailsComponent implements OnInit {

  collegeName: string
  college: College
  constructor(private route: ActivatedRoute, private collegeService: CollegeService) { }

  ngOnInit(): void {
    this.collegeName = this.route.snapshot.params['collegeName'];

    this.college = new College();
    this.collegeService.getCollegeBycollegeName(this.collegeName).subscribe( data => {
      this.college = data;
    });
  }

}
