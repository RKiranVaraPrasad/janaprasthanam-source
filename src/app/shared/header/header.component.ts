import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList: any;

  constructor( private categoriesService: SharedService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories()
    .subscribe(
      data => this.menuList = data
    )
  }

}
