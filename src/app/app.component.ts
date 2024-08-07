import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit {
  title = 'Sephora';

  data = [];

  constructor(private dataSer: DataService) {}

  ngOnInit() {
    this.dataSer.getData().subscribe((response) => {
      //console.log(response);
      this.data = response;
    });
  }
}
