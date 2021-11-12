import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './layer/body/body.component';
import { CardsComponent } from './components/cards/cards.component';
import { PresentationComponent } from './layer/presentation/presentation.component';
import { ChipComponent } from './components/chip/chip.component';
import { InputComponent } from './components/input/input.component';
import { MailComponent } from './layer/mail/mail.component';
import { CardsBodyComponent } from './layer/body/cards-body/cards-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    CardsComponent,
    PresentationComponent,
    ChipComponent,
    InputComponent,
    MailComponent,
    CardsBodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
