import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterCoursComponent } from './component/Cours/ajouter-cours/ajouter-cours.component';
import { HomePageComponent } from './component/HomePage/home-page/home-page.component';
import { ContactComponent } from './component/Contact/contact/contact.component';
import { AfficherCoursComponent } from './component/Cours/afficher-cours/afficher-cours.component';
import { LoginComponent } from './component/Login/login.component';
import { SignUpComponent } from './component/Sign-up/sign-up.component';
import { ForgetPasswordComponent } from './component/Forget-password/forget-password.component';
import { AuthGuard } from './services/Auth/auth.guard';
import { DetailCoursComponent } from './component/Cours/detail-cours/detail-cours.component';


const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "addcours", component: AjouterCoursComponent },
  { path: "detail-cours", component: DetailCoursComponent },
  { path: "contact", component: ContactComponent, canActivate: [AuthGuard] },
  // {path : "addLecon", component: AjouterLeconComponent},
  { path: "courses", component: AfficherCoursComponent },
  { path: "login", component: LoginComponent },
  { path: "forgetPassword", component: ForgetPasswordComponent },
  { path: "signUp", component: SignUpComponent },

  { path: "", redirectTo: "", pathMatch: "full" },]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
