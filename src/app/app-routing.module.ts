import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterCoursComponent } from './component/Cours/ajouter-cours/ajouter-cours.component';
import { AjouterLeconComponent } from './component/Lecon/ajouter-lecon/ajouter-lecon.component';
import { HomePageComponent } from './component/HomePage/home-page/home-page.component';
<<<<<<< Updated upstream
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



  { path: "", redirectTo: "", pathMatch: "full" }
=======
import { AfficherCoursComponent } from './component/Cours/afficher-cours/afficher-cours.component';


const routes: Routes = [
  { path: "ajoutCours", component: AjouterCoursComponent },
  { path: "home", component: HomePageComponent },
  { path: "afficher", component: AfficherCoursComponent },
  // {path : "addLecon", component: AjouterLeconComponent},
  { path: "", redirectTo: "home", pathMatch: "full" }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
