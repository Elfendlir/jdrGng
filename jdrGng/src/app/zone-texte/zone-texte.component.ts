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
  idCurrentRoute: number = 1;

  constructor(private scenarioService: ScenarioService, private routeService: RouteService) { }

  ngOnInit() {
    this.routeService.getOne(this.idCurrentRoute).subscribe(
      routeSelected => this.route = routeSelected
    );
  }

  changerDeRoute() {
    this.idCurrentRoute = 2;
  }
}
