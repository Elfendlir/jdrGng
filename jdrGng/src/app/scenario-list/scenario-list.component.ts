import { Component, OnInit } from '@angular/core';
import {ScenarioService} from '../services/scenario.service';
import * as myGlobals from "../globals";

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css']
})
export class ScenarioListComponent implements OnInit {

  constructor(private scenarioService: ScenarioService) { }

  imagesPath;
  scenarios;
  showAppRoute: Boolean = false;
  scenario;
  ngOnInit() {
    this.scenarioService.list().subscribe(
      laRep => this.scenarios = laRep
    );
  }
  mafonction(scenario) {
    this.scenario = scenario;
    this.showAppRoute = true;
  }
}
