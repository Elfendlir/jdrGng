import {Component, Input, OnInit} from '@angular/core';
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
  @Input() partieId;
  constructor(private scenarioService: ScenarioService, private routeService: RouteService) { }

  ngOnInit() {
    this.scenarioService.getOne(this.partieId).subscribe(
      scenarioSelected => {
        this.scenario = scenarioSelected;
      },
          () => {},
          () => {
            console.log(this.scenario);
            // this.routeService.getOne(this.partieId).subscribe(
            //   routeSelected => this.route = routeSelected
            // );
          }
    );
  }

}
