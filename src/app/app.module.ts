import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioViewComponent } from './views/radio-view/radio-view.component';
import { RadioOptionComponent } from './components/radio/radio-option/radio-option.component';
import { RadioComponent } from './components/radio/radio/radio.component';
import { CardComponent } from './components/card/card/card.component';
import { CardInfoComponent } from './components/card/card-info/card-info.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioViewComponent,
    RadioOptionComponent,
    RadioComponent,
    CardComponent,
    CardInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
