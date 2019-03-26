import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExperienceComponent} from './experience/experience.component';
import {WebComponent} from './web/web.component';
import {MobileComponent} from './mobile/mobile.component';
import {DataComponent} from './data/data.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'web', component: WebComponent},
  {path: 'mobile', component: MobileComponent},
  {path: 'data', component: DataComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
