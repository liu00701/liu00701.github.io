import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SlideComponent} from './slide/slide.component';
import {RouterModule} from "@angular/router";
import {SafeHtmlPipe} from "./SafeHtmlPipe";
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    SafeHtmlPipe,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: StartComponent
      },
      {
        path: 'slide/:id',
        component: SlideComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
