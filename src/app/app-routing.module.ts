import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { BasicFormComponent } from './form/basic-form/basic-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/home' },
  { path: 'home', component: HomeComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  static components = [ HomeComponent, FeatureComponent ];
 }
