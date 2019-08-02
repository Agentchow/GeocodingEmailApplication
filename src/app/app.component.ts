import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EasyEmail';

  miles = [
    {value: '10-0', viewValue: '10'},
    {value: '25-1', viewValue: '25'},
    {value: '50-2', viewValue: '50'}
  ];
}
