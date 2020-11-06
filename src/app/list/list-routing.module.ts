import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';
import { DetailComponent } from './detail/detail.component';
import { EPaperDetailComponent } from './e-paper-detail/e-paper-detail.component';
import { EPaperComponent } from './e-paper/e-paper.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path: 'list/:id', component: ListComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'banner/:id', component: BannerComponent},
  {path: 'breakingNews/:id', component: BreakingNewsComponent},
  {path: 'ePaper', component: EPaperComponent},
  {path: 'ePaper/:id', component: EPaperDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
