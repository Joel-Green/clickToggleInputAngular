import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickinputComponent } from './components/clickinput/clickinput.component';
import { FormStyle } from '@angular/common';
import { AutoFocusDirective } from './directive/auto-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClickinputComponent,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
