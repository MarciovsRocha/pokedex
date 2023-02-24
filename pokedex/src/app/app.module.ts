import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { FrontcardsComponent } from './paginas/frontcards/frontcards.component';
import { BackcardsComponent } from './paginas/backcards/backcards.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FrontcardsComponent,
    BackcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
