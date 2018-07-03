import {Component, Input, OnInit} from '@angular/core';
import {ScenarioService} from '../services/scenario.service';
import * as myGlobals from "../globals";

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css']
})
export class ScenarioListComponent implements OnInit {

  @Input() listScenarios;

  constructor(private scenarioService: ScenarioService) { }

  imagesPath;
  scenarios;
  showAppRoute: Boolean = false;
  scenario;
  ngOnInit() {
  }

  mafonction(scenario) {
    this.scenario = scenario;
    this.showAppRoute = true;
  }


  delFonction(scenario) {
    this.scenario = scenario;
    console.log(this.scenario.id);
    this.scenarioService.delete(this.scenario.id).subscribe();
  }
}
