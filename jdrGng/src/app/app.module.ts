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

const routes: Routes = [
  {path: 'routelist', component : RouteListComponent},
  {path: 'routeadd', component : RouteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
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
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [RouteService, UtilisateurService],

  bootstrap: [AppComponent]
})
export class AppModule { }
