import { Component, OnInit } from '@angular/core';
import {ScenarioService} from "../services/scenario.service";
import {RouteService} from "../services/route.service";

@Component({
  selector: 'app-zone-texte',
  templateUrl: './zone-texte.component.html',
  styleUrls: ['./zone-texte.component.css']
})
export class ZoneTexteComponent implements OnInit {

  scenario;
  route;

  constructor(private scenarioService: ScenarioService, private routeService: RouteService) { }

  ngOnInit() {
    this.scenarioService.getOne(1).subscribe(
      scenarioSelected => this.scenario = scenarioSelected
    );
    this.routeService.getOne(1).subscribe(
      routeSelected => this.route = routeSelected
    );
  }

}
