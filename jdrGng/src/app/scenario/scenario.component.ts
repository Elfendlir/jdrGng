import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ScenarioService} from '../services/scenario.service';


@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {
  userForm: FormGroup;
  formSubmitted = false;
  listScenarios;
  constructor(private fb: FormBuilder, private scenarioServ: ScenarioService) { }

  ngOnInit() {
    this.getScenarios();
    this.userForm = this.fb.group({
      'titre': [ '' ,
        Validators.compose([Validators.required])]
    });
  }

  submitForm() {
    this.formSubmitted = true;
    if (this.userForm.valid ) {
      this.scenarioServ.add(this.userForm.value).subscribe(
        userFromDb => {
          console.log(userFromDb);
        },
        () => {},
        () => {
          this.getScenarios();
        }
      );
    }
  }

  getScenarios() {
    this.scenarioServ.list().subscribe(
      listScen => {
        this.listScenarios = listScen;
      }
    );
  }
}
