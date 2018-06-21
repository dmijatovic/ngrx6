import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/app.reducers';
import { CounterService } from './store/counter.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CounterService])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
