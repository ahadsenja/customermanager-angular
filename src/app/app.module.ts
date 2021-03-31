import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './shared/data.service';
import { BasicFormComponent } from './form/basic-form/basic-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    BasicFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
