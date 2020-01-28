import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobaComponent } from './soba/soba.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { AddSobaComponent } from './add-soba/add-soba.component';

@NgModule({
  declarations: [
    AppComponent,
    SobaComponent,
    FilterPipePipe,
    AddSobaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
