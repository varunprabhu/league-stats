import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChampionPortraitComponent } from './champion-portrait/champion-portrait.component';
import { ChampionDashboardComponent } from './champion-dashboard/champion-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionPortraitComponent,
    ChampionDashboardComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
