import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChampionPortraitComponent } from './champion-portrait/champion-portrait.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionPortraitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
