import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterCoursComponent } from './component/Cours/ajouter-cours/ajouter-cours.component';
import { HomePageComponent } from './component/HomePage/home-page/home-page.component';
import { ContactComponent } from './component/Contact/contact/contact.component';
import { AfficherCoursComponent } from './component/Cours/afficher-cours/afficher-cours.component';
import { LoginComponent } from './component/Login/login.component';
import { SignUpComponent } from './component/Sign-up/sign-up.component';


const routes: Routes = [
  { path: "addcours", component: AjouterCoursComponent },
  { path: "", component: HomePageComponent },
  { path: "contact", component: ContactComponent },
  // {path : "addLecon", component: AjouterLeconComponent},
  { path: "afficher", component: AfficherCoursComponent },
  { path: "login", component: LoginComponent },
  { path: "signUp", component: SignUpComponent },
  { path: "", redirectTo: "", pathMatch: "full" },]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
