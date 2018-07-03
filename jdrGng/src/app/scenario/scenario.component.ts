import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ScenarioService} from '../services/scenario.service';
import {IAlert} from "../personnage/personnage.component";


@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {
  userForm: FormGroup;
  formSubmitted = false;
  listScenarios;
  alert: IAlert;
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
      this.alert = {
        id: 1,
        type: 'success',
        message: 'Le scénario a bien été créé !',
      };
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
