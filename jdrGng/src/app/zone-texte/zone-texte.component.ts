import { Component, OnInit, Input } from '@angular/core';
import {ScenarioService} from "../services/scenario.service";
import {RouteService} from "../services/route.service";
import {Partie} from "../classes/partie";

@Component({
  selector: 'app-zone-texte',
  templateUrl: './zone-texte.component.html',
  styleUrls: ['./zone-texte.component.css']
})
export class ZoneTexteComponent implements OnInit {

  @Input() partieEnCours: Partie;
  route;
  idCurrentRoute: number;

  constructor(private scenarioService: ScenarioService, private routeService: RouteService) { }

  ngOnInit() {
    //TODO récupérer la current route au lancement
    //this.idCurrentRoute = partieEnCours.currentRoute.id;
    this.idCurrentRoute = 1;
    this.routeService.getOne(this.idCurrentRoute).subscribe(
      routeSelected => this.route = routeSelected
    );
  }

  changerDeRoute() {
    //TODO modifie la current route au click puis modifie la partie
    this.idCurrentRoute = this.route.routeInitiale.id;
    this.routeService.getOne(this.idCurrentRoute).subscribe(
      routeSelected => this.route = routeSelected
    );
    //this.partieEnCours.currentRoute.id = this.idCurrentRoute;
    //this.partieService.update(this.partieEnCours).subscribe();
    //window.location.reload();
  }
}
