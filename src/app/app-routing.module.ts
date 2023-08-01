import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { BlogComponent } from './component/blog/blog.component';

const routes: Routes = [
  {path: '', redirectTo: 'work', pathMatch: 'full'},
  {path: 'work', component: HomeComponent},
  {path: 'aboutme', component: AboutMeComponent},
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
