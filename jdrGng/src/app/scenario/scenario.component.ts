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
  selectedFile: File;
  fileName;
  alert: IAlert;
  progress: { percentage: number } = { percentage: 0 };
  constructor(private fb: FormBuilder, private cs: ScenarioService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      'titre': [ '' ,
        Validators.compose([Validators.required])]
    });
  }

  submitForm() {
    this.formSubmitted = true;

    if (this.userForm.valid ) {
      this.userForm.value.image = this.fileName;
      this.cs.add(this.userForm.value).subscribe(
        userFromDb => {
          console.log(userFromDb);
        }
      );
      this.alert = {
        id: 1,
        type: 'success',
        message: 'Le scénario a bien été créé !',
      };
    }
  }
}
