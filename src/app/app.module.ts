import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Import angular material
 */
import {
  MatTableModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractsComponent } from './contracts/contracts.component';  //Import Contracts component
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContractsComponent  // Declare Contracts compoment
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
