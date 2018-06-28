import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConnexionComponent} from './connexion/connexion.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AlertModule } from 'ngx-bootstrap';
import { ProfilComponent } from './profil/profil.component';
import { RouteComponent } from './route/route.component';
import { RouteListComponent } from './route-list/route-list.component';
import {RouteService} from './route.service';
import {UtilisateurService} from './utilisateur.service';
import {HttpClientModule} from '@angular/common/http';
import { InterfaceJdrComponent } from './interface-jdr/interface-jdr.component';
import { ZoneTexteComponent } from './zone-texte/zone-texte.component';
import { BarreMenuComponent } from './barre-menu/barre-menu.component';
import { ZoneImageComponent } from './zone-image/zone-image.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { LanceDesComponent } from './lance-des/lance-des.component';
import { IconePersonnageComponent } from './icone-personnage/icone-personnage.component';
import { IconeInventaireComponent } from './icone-inventaire/icone-inventaire.component';
import { IconeProfilComponent } from './icone-profil/icone-profil.component';
import { IconeOptionsComponent } from './icone-options/icone-options.component';
import { IconeQuitterComponent } from './icone-quitter/icone-quitter.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { ListPartiesComponent } from './list-parties/list-parties.component';

const routes: Routes = [
  {path: 'routelist', component : RouteListComponent},
  {path: 'routeadd', component : RouteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListPartiesComponent
    PersonnageComponent,
    InterfaceJdrComponent,
    ZoneTexteComponent,
    BarreMenuComponent,
    ZoneImageComponent,
    SidebarComponent,
    LanceDesComponent,
    IconeInventaireComponent,
    IconeProfilComponent,
    IconeQuitterComponent,
    IconeOptionsComponent,
    IconePersonnageComponent
    ConnexionComponent,
    ScenarioComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ProfilComponent,
    RouteComponent,
    RouteListComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    PersonnageService,
    PartieService,
    InventaireService,
    ScenarioService,
    ItemService,
    RouteService,
    UtilisateurService
  ],
  providers: [RouteService, UtilisateurService],

  bootstrap: [AppComponent]
})
export class AppModule { }
