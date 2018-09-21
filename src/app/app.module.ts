import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WhatsAppComponent } from './components/whats-app.component';
import { WhatItemComponent } from './components/what-item.component';
import { WhatFilterComponent } from './components/what-filter.component';
import { WhatFormComponent } from './components/what-form.component';

@NgModule({
  declarations: [AppComponent, WhatsAppComponent, WhatItemComponent, WhatFilterComponent, WhatFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
