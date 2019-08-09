import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EasyEmail';
  selected = 'Filter by miles-0';
  miles = [
    {value: 'Filter by miles-0', viewValue: 'Filter by miles'},
    {value: '10-1', viewValue: '10'},
    {value: '25-2', viewValue: '25'},
    {value: '50-3', viewValue: '50'}
  ];

  columnDefs = [
    {headerName: 'Name', field: 'name'},
    {headerName: 'Email', field: 'email'},
    {headerName: 'Location', field: 'location'},
    {headerName: 'Position', field: 'position'},
  ];

  rowData = [
    { name: 'John', email: 'JohnDoe@sas.com', location: '1234 Sesame Street', position: 'Manager'},
    { name: 'Susan', email: 'SusansSmith@sas.com', location: '401 Generic Road', position: 'Director'},
    { name: 'Charles', email: 'CharlesChow@sas.com', location: '377 MLK St', position: 'Developer'},


  ];
}
