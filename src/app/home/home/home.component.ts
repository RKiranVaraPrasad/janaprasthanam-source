import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lastElements: any = [];
  andhraNews: any = [];
  sportNews: any = [];
  breakingNews: any = [];
  latestNewsLeft: any;
  latestNewsRight: any;
  nationalNews: any;
  telanganaNews: any;
  bannerNews: any;
  YoutubeArray: any;
  urlSafe: SafeResourceUrl;
  ePaperItems: any;

  constructor(
    private homeService: HomeService, public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.subscribeLatestNewsLeft();
    this.subscribeLatestNewsRight();
    this.subscribeAndhraNews();
    this.subscribeSportNews();
    this.subscribeBreakingNews();
    this.subscribeNationalNews();
    this.subscribeTelanganaNews();
    this.subscribeBannerSlider();
    this.subscribeYoutubeLink();
    this.subscribeEPaperList();
  }

  subscribeBannerSlider():void{
    this.homeService.getBannerList()
    .subscribe(data => {
      this.bannerNews = data;
      console.log('Banner News' + this.latestNewsLeft)
      });
  }

  subscribeLatestNewsLeft():void{
    this.homeService.getLatestNewsLeft()
    .subscribe(data => {
      this.latestNewsLeft = data;
      console.log('Latest News' + this.latestNewsLeft)
      });
  }

  subscribeLatestNewsRight():void{
    this.homeService.getLatestNewsRight()
    .subscribe(data => {
      this.latestNewsRight = data;
      });
  }

  subscribeNationalNews():void{
    this.homeService.getNationalNews()
    .subscribe(data => {
      this.nationalNews = data;
      });
  }

  subscribeAndhraNews():void{
    this.homeService.getAndhraNews()
    .subscribe(data => {
      this.andhraNews = data;
      });
  }

  subscribeTelanganaNews():void{
    this.homeService.getTelanganaNews()
    .subscribe(data => {
      this.telanganaNews = data;
      });
  }

  subscribeSportNews():void{
    this.homeService.getSportList()
    .subscribe(data => {
      this.sportNews = data;
      });
  }

  subscribeBreakingNews():void{
    this.homeService.getBreaking()
    .subscribe(data => {
      this.breakingNews = data;
      // console.log(this.breakingNews)
      });
  }
  subscribeYoutubeLink(){
    this.homeService.getYoutube()
    .subscribe(data => {
      this.YoutubeArray = data;
      console.log(this.YoutubeArray)
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
