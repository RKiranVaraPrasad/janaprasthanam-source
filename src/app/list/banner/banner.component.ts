import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  item: any = {};
  relatedItems: any;

  constructor( private homeService: HomeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
    this.getBannerDetails();
  }

  getBannerDetails(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.homeService.getBannerDetail(id)
    .subscribe((data: any) => {
      this.item = data[0];
      console.log(this.item)
    });
  }

}
