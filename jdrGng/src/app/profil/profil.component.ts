import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from '../services/utilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
   userForm: FormGroup;
   formSubmitted = false;

  constructor(private fb: FormBuilder, private cs: UtilisateurService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      'email': [ '' ,
        Validators.compose([Validators.required])],
      'mdp': '',
      'nom': ''
    });
  }

  submitForm() {
    this.formSubmitted = true;

    if (this.userForm.valid ) {
      this.cs.add(this.userForm.value).subscribe(
        userFromDb => {
          console.log('lol --------------');
          console.log(userFromDb);
        }
      );
    }
  }
}
