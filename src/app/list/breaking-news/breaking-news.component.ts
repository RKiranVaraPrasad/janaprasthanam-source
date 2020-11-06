import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../administrator/common.service';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.scss']
})
export class BreakingNewsComponent implements OnInit {

  breakingNewItem: any;

  constructor( private commonService: HomeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.commonService.getBreakingDetail(id)
    .subscribe(
      data => this.breakingNewItem = data[0]
    )
  }



}
