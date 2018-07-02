import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ScenarioService} from '../services/scenario.service';

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css']
})
export class ScenarioListComponent implements OnInit {

  @Output() output = new EventEmitter();

  constructor(private scenarioService: ScenarioService) { }

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


  delFonction(scenario) {
    this.scenario = scenario;
    console.log(this.scenario.id);
    this.scenarioService.delete(this.scenario.id).subscribe();

    this.scenarioService.list().subscribe(
      laRep => this.scenarios = laRep
    );
    console.log('Update');
    this.scenarioService.list().subscribe(
      laRep => this.scenarios = laRep
    );
  }
}
