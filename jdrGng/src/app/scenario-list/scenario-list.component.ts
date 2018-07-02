import {Component, Input, OnInit} from '@angular/core';
import {ScenarioService} from '../services/scenario.service';

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css']
})
export class ScenarioListComponent implements OnInit {

  showAppRoute: Boolean = false;
  scenario;
  @Input() listScenarios;

  constructor(private scenarioService: ScenarioService) { }

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
