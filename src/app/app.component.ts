import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataservice: DataService) { }

  ngOnInit() { 
    console.log(this.dataservice.cars);
  }
  title = 'app';

  arr = ["abc", "bcd", "cdf", "efg"];

  isTrue = true;
}
