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
      this.cs.add(this.userForm.value).subscribe(
        userFromDb => {
          console.log(userFromDb);
        }
      );
    }
  }
}
