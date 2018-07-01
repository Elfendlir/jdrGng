import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from '../services/utilisateur.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user;
  userForm: FormGroup;
  constructor(private userServ: UtilisateurService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      'email': ['',
        Validators.compose(
          [Validators.required]
        )],
      'mdp': ['',
        Validators.compose(
          [Validators.required]
        )]
    });
  }

  submitForm ()
  {
    if (this.userForm.valid) {
      this.userServ.login(this.userForm.value.email, this.userForm.value.mdp).subscribe(
        leUser => this.user = leUser,
        () => {
          this.user = undefined;
        },
        () => {
          console.log(this.user);
        }
      );
    } else {
      console.log('plop');
    }
    //this.userServ.login()
  }
  deconnection() {
    this.user = undefined;
  }
}
