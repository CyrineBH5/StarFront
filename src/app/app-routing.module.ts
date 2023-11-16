import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterCoursComponent } from './component/Cours/ajouter-cours/ajouter-cours.component';
import { AjouterLeconComponent } from './component/Lecon/ajouter-lecon/ajouter-lecon.component';
import { HomePageComponent } from './component/HomePage/home-page/home-page.component';


const routes: Routes = [
  {path : "addCours", component: AjouterCoursComponent},
  {path : "home", component: HomePageComponent},
  // {path : "addLecon", component: AjouterLeconComponent},
  {path : "", redirectTo : "home", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
