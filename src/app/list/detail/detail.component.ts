import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item: any = {};
  getCategoryId: number;
  relatedItems: any;
  latestNewsLeft: any;
  sportNews: any = [];
  ePaperItems: any;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
    this.getDetailByCategory();
    this.subscribeLatestNewsLeft();
    this.subscribeSportNews();
    this.subscribeEPaperList();
  }

  getDetailByCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.homeService.getPostDetail(id)
      .subscribe((data: any) => {
        this.item = data[0];
        console.log(data[0].Category_ID)
        setTimeout(() => {
          this.getCategoryId = data[0].Category_ID;
        }, 100);
      });
    
      setTimeout(() => {
        this.homeService.getList(this.item.Category_ID)
        .subscribe(
          data => {
            this.relatedItems = data,
            console.log(this.relatedItems)
          }
        )
      }, 1000);
  }

  subscribeLatestNewsLeft():void{
    this.homeService.getLatestNewsLeft()
    .subscribe(data => {
      this.latestNewsLeft = data;
      console.log('Latest News' + this.latestNewsLeft)
      });
  }

  subscribeSportNews():void{
    this.homeService.getSportList()
    .subscribe(data => {
      this.sportNews = data;
      });
  }
  
  subscribeEPaperList(){
    this.homeService.getEPaperList()
    .subscribe(
      data => this.ePaperItems = data
    )
    // console.log(this.ePaperItems)
  }

}
