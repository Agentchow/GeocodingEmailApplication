import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material';

import { GridsModule } from './grids/grids.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridsModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  providers: [
    //   MatIconRegistry,
    // ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
