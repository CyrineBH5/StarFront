import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterCoursComponent } from './component/Cours/ajouter-cours/ajouter-cours.component';
import { ModifierCoursComponent } from './component/Cours/modifier-cours/modifier-cours.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


export class YourModule { }

@NgModule({
  declarations: [
    AppComponent,
    AjouterCoursComponent,
    ModifierCoursComponent,


  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
