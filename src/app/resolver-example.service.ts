import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverExampleService implements Resolve<any>  {
  
  private apiURL = 'https://fakestoreapi.com/products/';

  constructor(private http:HttpClient) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  console.log("we are coming here ",this.apiURL+route.params['id']);
    return  this.http.get(this.apiURL+route.params['id']);
  }
  
}
