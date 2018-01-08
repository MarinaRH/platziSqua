import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'marina';
  lugares:any=[
    {active:true, nombre:'floreria las gardenias'},
    {active:false, nombre:'donas las gardenias'},
    {active:true, nombre:'veterinari huellitas'}
  ];
  lat:number=-12.065309;
  lng:number=-76.9585448;
}
