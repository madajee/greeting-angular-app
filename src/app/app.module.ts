import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { GreetingDetailComponent } from './greeting-detail/greeting-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    GreetingDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
