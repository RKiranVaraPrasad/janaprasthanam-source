import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listItems: any;
  title: string;
  latestNewsLeft: any;
  sportNews: any = [];
  ePaperItems: any;
  constructor( private listItemsService: HomeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
    this.getListItems();
    this.subscribeLatestNewsLeft();
    this.subscribeSportNews();
    this.subscribeEPaperList();
  }

  getListItems(){
    let id = +this.route.snapshot.paramMap.get('id');
    this.listItemsService.getList(id)
    .subscribe(
      data => {
        this.listItems = data;
        console.log(this.listItems)
      }
    )
    this.listItemsService.getcategories()
    .subscribe(
      data => {
        var categories;
        categories = data,
        categories.forEach(element => {
          if(element.Category_ID === id){
            this.title = element.Category_Name;
          }
        });
      }
    )
    
  }

  subscribeLatestNewsLeft():void{
    this.listItemsService.getLatestNewsLeft()
    .subscribe(data => {
      this.latestNewsLeft = data;
      console.log('Latest News' + this.latestNewsLeft)
      });
  }

  subscribeSportNews():void{
    this.listItemsService.getSportList()
    .subscribe(data => {
      this.sportNews = data;
      });
  }

  subscribeEPaperList(){
    this.listItemsService.getEPaperList()
    .subscribe(
      data => this.ePaperItems = data
    )
    // console.log(this.ePaperItems)
  }

}
