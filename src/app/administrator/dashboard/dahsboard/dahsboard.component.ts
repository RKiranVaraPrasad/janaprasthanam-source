import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './dahsboard.component.html',
  styleUrls: ['./dahsboard.component.scss']
})
export class DahsboardComponent implements OnInit {

  latestNewsData = <any>{};
  date = new Date(Date.now());

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  sendLatestNewsData(){
    this.latestNewsData.publishDate = this.date;
    this.commonService.postLatestNewsData(this.latestNewsData)
    .subscribe(
      res => console.log("successful"),
      err => console.log(err)
    )
  }

}
