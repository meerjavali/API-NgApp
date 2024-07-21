import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { PageNotComponent } from './page-not/page-not.component';
import { ResolverExampleService } from './resolver-example.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent }, //default route
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: ViewProductComponent , resolve:{information:ResolverExampleService}},
  {path:'error', component: PageNotComponent},
  { path: '**', redirectTo:'/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
