import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import {PersonnageService} from "./services/personnage.service";
import {PartieService} from "./services/partie.service";
import {InventaireService} from "./services/inventaire.service";
import {ScenarioService} from "./services/scenario.service";
import {ItemService} from "./services/item.service";
import {RouteService} from "./services/route.service";
import {UtilisateurService} from "./services/utilisateur.service";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
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
