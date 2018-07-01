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
    this.idCurrentRoute = 1;
    this.routeService.getOne(this.idCurrentRoute).subscribe(
      routeSelected => this.route = routeSelected
    );
  }

  changerDeRoute() {
    //TODO modifier la current route au click
    this.idCurrentRoute = 2;
    this.routeService.getOne(this.idCurrentRoute).subscribe(
      routeSelected => this.route = routeSelected
    );
    //window.location.reload();
  }
}
