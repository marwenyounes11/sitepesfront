import { BrowserModule  } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule,MatDialogRef, } from '@angular/material/dialog';
import {MAT_DIALOG_DATA } from "@angular/material/dialog";
import {HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {ToastrModule } from 'ngx-toastr';
import {AgmCoreModule } from '@agm/core';
import {DatePipe } from '@angular/common';

import {AppComponent } from './app.component';

import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SouspresentationComponent } from './components/souspresentation/souspresentation.component';
import { ProspectusComponent } from './components/prospectus/prospectus.component';
import { NoseeComponent } from './components/nosee/nosee.component';
import { ParetenariatsComponent } from './components/paretenariats/paretenariats.component';
import { ActualitesComponent } from './components/actualites/actualites.component';
import { MediasComponent } from './components/medias/medias.component';
import { CandidatureComponent } from './components/candidature/candidature.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmplacementComponent } from './components/emplacement/emplacement.component';
import { DropdownDirective } from './components/dropdown.directive';
import { ElanComponent } from './components/elan/elan.component';
import { PesComponent } from './components/pes/pes.component';
import { RhComponent } from './components/rh/rh.component';
import { FinanceComponent } from './components/finance/finance.component';
import { ComptabiliteComponent } from './components/comptabilite/comptabilite.component';
import { CommerceComponent } from './components/commerce/commerce.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { DeveloppementComponent } from './components/developpement/developpement.component';
import { DesignComponent } from './components/design/design.component';
import { PhotosComponent } from './components/photos/photos.component';
import { VideosComponent } from './components/videos/videos.component';
import { ArticleComponent } from './components/article/article/article.component';
import { AddArticleComponent } from './components/article/add-article/add-article.component';
import { ListArticleComponent } from './components/article/list-article/list-article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OffresComponent } from './components/offres/offres.component';
import { PostuleComponent } from './components/postule/postule.component';
import { AddCandidatureComponent } from './components/add-candidature/add-candidature.component';
import { AddOffreComponent } from './components/add-offre/add-offre.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CandidatureresponseComponent } from './components/candidatureresponse/candidatureresponse.component';


const appRoutes : Routes = [
  {path: '', component:AcceuilComponent },
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent,children: [
  {path: 'larticle', component: ListArticleComponent},
  {path: 'article', component: AddArticleComponent},
  {path: 'addoffre', component: AddOffreComponent},
  { path: 'offres', component: OffresComponent },
 ]},

  
  {path: 'logout', redirectTo:'login'},
 
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'presentation', children: [
    { path: 'souspresentation', component: SouspresentationComponent },
    { path: 'prospectus', component: ProspectusComponent },
    { path: 'emplacement', component: EmplacementComponent }
 ]
  
    },
  {path: 'nosee', children: [
    { path: 'elan', children: [
      { path: 'rh', component: RhComponent },
      { path: 'commerce', component: CommerceComponent },
      { path: 'comptabilite', component: ComptabiliteComponent },
      { path: 'finance', component: FinanceComponent }
   ] },
    { path: 'pes', children: [
      { path: 'design', component: DesignComponent },
      { path: 'developpement', component: DeveloppementComponent },
      { path: 'marketing', component: MarketingComponent }
   ] }
 ]},
  {path: 'partenariats', component: ParetenariatsComponent},
  {path: 'actualites', redirectTo:'acceuil#page'},
  {path: 'medias', children: [
    { path: 'photos', component: PhotosComponent },
    { path: 'videos', component: VideosComponent }
 ]},
  {path: 'candidature', children: [
    { path: 'offre', component: OffresComponent },
    { path: 'postules', component: AddCandidatureComponent },
    { path: 'response', component: CandidatureresponseComponent  }
 ]},
  {path: 'contact', component: ContactComponent},

  
  
];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    PresentationComponent,
    NoseeComponent,
    ParetenariatsComponent,
    ActualitesComponent,
    MediasComponent,
    CandidatureComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    EmplacementComponent,
    DropdownDirective,
    ElanComponent,
    PesComponent,
    RhComponent,
    FinanceComponent,
    ComptabiliteComponent,
    CommerceComponent,
    MarketingComponent,
    DeveloppementComponent,
    DesignComponent,
    PhotosComponent,
    VideosComponent,
    ArticleComponent,
    AddArticleComponent,
    ListArticleComponent,
    OffresComponent,
    PostuleComponent,
    AddCandidatureComponent,
    AddOffreComponent,
    LoginComponent,
    AdminComponent,
    CandidatureresponseComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatDialogModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxMatFileInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCmD9oXtn6C0-Qj5Sz-nEZdSiYq2t1yf6U'
      
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [DatePipe, MatDatepickerModule,
    MatNativeDateModule,{ provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} }],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }