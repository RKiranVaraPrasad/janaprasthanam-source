import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-e-paper',
  templateUrl: './e-paper.component.html',
  styleUrls: ['./e-paper.component.scss']
})
export class EPaperComponent implements OnInit {

  ePaperItems: any;

  constructor(private commonService: HomeService) { }

  ngOnInit(): void {
    this.subscribeEPaperList();
  }

  // getDetails(){
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   console.log(id)
  //   this.commonService.getBreakingDetail(id)
  //   .subscribe(
  //     data => this.breakingNewItem = data[0]
  //   )
  // }

  subscribeEPaperList(){
    this.commonService.getEPaperList()
    .subscribe(
      data => this.ePaperItems = data
    )
    // console.log(this.ePaperItems)
  }

}
