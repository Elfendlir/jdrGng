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

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ScenarioComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ProfilComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
