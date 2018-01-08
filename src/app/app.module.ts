import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCECabALE7O9CEkW6diMmLK4I0wBASQOXg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
