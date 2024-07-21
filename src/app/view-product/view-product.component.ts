import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  
  getProductInfo: any = {};

  constructor(private activatedRoute: ActivatedRoute, private dataSer: DataService, private router: Router) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log(params['id']);
    //   const id = params['id'];
    //   this.dataSer.getProductDetails(id).subscribe((response) => {
    //     console.log(response, 'id');
    //     this.getProductInfo = response;
    //   });
    // });

    this.activatedRoute.data.subscribe(response=>{
      console.log(response);
      this.getProductInfo = response['information']
    })
  }

  handleBack(): void {
    this.router.navigate(['/'])
  }
}
