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
import { ProfilComponent } from './profil/profil.component';
import { RouteComponent } from './route/route.component';
import { RouteListComponent } from './route-list/route-list.component';
import { InterfaceJdrComponent } from './interface-jdr/interface-jdr.component';
import { ZoneTexteComponent } from './zone-texte/zone-texte.component';
import { BarreMenuComponent } from './barre-menu/barre-menu.component';
import { ZoneImageComponent } from './zone-image/zone-image.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LanceDesComponent } from './lance-des/lance-des.component';
import { IconePersonnageComponent } from './icone-personnage/icone-personnage.component';
import { IconeInventaireComponent } from './icone-inventaire/icone-inventaire.component';
import { IconeProfilComponent } from './icone-profil/icone-profil.component';
import { IconeOptionsComponent } from './icone-options/icone-options.component';
import { IconeQuitterComponent } from './icone-quitter/icone-quitter.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { ListPartiesComponent } from './list-parties/list-parties.component';
import { ListPersonnageComponent } from './list-personnage/list-personnage.component';
import {PersonnageService} from './services/personnage.service';
import {ItemService} from './services/item.service';
import {InventaireService} from './services/inventaire.service';
import {PartieService} from './services/partie.service';
import {ScenarioService} from './services/scenario.service';
import {RouteService} from './services/route.service';
import {UtilisateurService} from './services/utilisateur.service';
import { ScenarioListComponent } from './scenario-list/scenario-list.component';
import { RouteItemComponent } from './route-item/route-item.component';
import { ScenarioItemComponent } from './scenario-item/scenario-item.component';

const routes: Routes = [
  {path: 'routelist', component : RouteListComponent},
  {path: 'routeadd', component : RouteComponent},
  {path: 'interface-jdr/:id', component : InterfaceJdrComponent},
  {path: 'list-parties', component : ListPartiesComponent},
  {path: 'personnage', component : PersonnageComponent},
  {path: 'connexion', component : ConnexionComponent},
  {path: 'scenario', component : ScenarioComponent},
  {path: 'profil', component : ProfilComponent},
  {path: 'newgame', component : PersonnageComponent},
  {path: 'loadgame', component : ListPartiesComponent},
  {path: 'editperso', component : ListPersonnageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListPartiesComponent,
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
    IconePersonnageComponent,
    ConnexionComponent,
    ScenarioComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ProfilComponent,
    RouteComponent,
    RouteListComponent,
    ScenarioListComponent,
    RouteItemComponent,
    ScenarioItemComponent,
    RouteListComponent,
    ListPersonnageComponent
  ],
  imports: [
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
  bootstrap: [AppComponent]
})
export class AppModule { }
