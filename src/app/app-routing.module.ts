import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterCoursComponent } from './component/Cours/ajouter-cours/ajouter-cours.component';
import { AjouterLeconComponent } from './component/Lecon/ajouter-lecon/ajouter-lecon.component';
import { HomePageComponent } from './component/HomePage/home-page/home-page.component';
import { ContactComponent } from './component/Contact/contact/contact.component';


const routes: Routes = [
  {path : "addcours", component: AjouterCoursComponent},
  {path : "", component: HomePageComponent},
  {path : "contact", component: ContactComponent},
  // {path : "addLecon", component: AjouterLeconComponent},
  {path : "", redirectTo : "", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
