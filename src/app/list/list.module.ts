import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';
import { BannerComponent } from './banner/banner.component';
import { VideosComponent } from './videos/videos.component';
import { EPaperComponent } from './e-paper/e-paper.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EPaperDetailComponent } from './e-paper-detail/e-paper-detail.component';


@NgModule({
  declarations: [DetailComponent, ListComponent, BreakingNewsComponent, BannerComponent, VideosComponent, EPaperComponent, GalleryComponent, EPaperDetailComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
