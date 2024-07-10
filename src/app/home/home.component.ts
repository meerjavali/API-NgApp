import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data : any = [];

  constructor(private dataSer: DataService, private router: Router) {}

  ngOnInit() {
    this.dataSer.getData().subscribe((response) => {
      console.log(response);
      this.data = response;
    });
  }


  viewProduct(product: any) {
    //console.log(product);
    this.router.navigate([`/product/${product.id}`])
  }
}
