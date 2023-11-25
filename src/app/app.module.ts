import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterCoursComponent } from './component/Cours/ajouter-cours/ajouter-cours.component';
import { ModifierCoursComponent } from './component/Cours/modifier-cours/modifier-cours.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AjouterLeconComponent } from './component/Lecon/ajouter-lecon/ajouter-lecon.component';
import { HomePageComponent } from './component/HomePage/home-page/home-page.component';
import { ContactComponent } from './component/Contact/contact/contact.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export class YourModule { }

@NgModule({
  declarations: [
    AppComponent,
    AjouterCoursComponent,
    ModifierCoursComponent,
    AjouterLeconComponent,
    HomePageComponent,
    ContactComponent,



  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
