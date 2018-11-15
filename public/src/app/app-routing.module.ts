import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { DefaultCityComponent } from './default-city/default-city.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: DefaultCityComponent},
  {path: 'city', component: CityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
