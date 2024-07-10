import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent }, //default route
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: ViewProductComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
