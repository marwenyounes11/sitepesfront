import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AddArticleComponent } from '../components/article/add-article/add-article.component';
import { ListArticleComponent } from '../components/article/list-article/list-article.component';
import { AddMediasComponent } from '../components/medias/add-medias/add-medias.component';
import {MediasComponent } from '../components/medias/medias/medias.component';
import { RessourcesComponent } from '../components/ressources/ressources.component';
import { AddRessourceComponent } from '../components/add-ressource/add-ressource.component';
import { AddOffreComponent } from '../components/add-offre/add-offre.component';
import { OffresComponent } from '../components/offres/offres.component';
@NgModule({
  declarations: [],
  imports: [
   
    RouterModule.forChild([
        {path: 'login', component: LoginComponent},
        {path: 'logout', redirectTo:'login'},
        {path: 'admin', component: AdminComponent,canActivate: [
          AuthGuardService
      ],children: [
        {path: 'larticle', component: ListArticleComponent},
        {path: 'article', component: AddArticleComponent},
        {path: 'lmedias', component: MediasComponent},
        {path: 'medias', component: AddMediasComponent},
        {path: 'lressource', component: RessourcesComponent},
        {path: 'addressource', component: AddRessourceComponent},
        {path: 'addoffre', component: AddOffreComponent},
        { path: 'offres', component: OffresComponent },
       ]},
      
    ])
  ],
  exports: []
})
export class AdminModule { }