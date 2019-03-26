import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExperienceComponent} from './experience/experience.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
