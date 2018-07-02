import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from '../services/utilisateur.service';
import {Utilisateur} from '../classes/utilisateur';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userForm: FormGroup;
  user: Utilisateur;
  constructor(private fb: FormBuilder, private userServ: UtilisateurService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userForm = this.fb.group({
      'email': [ this.user.email ,
        Validators.compose([Validators.required])],
      'mdp': this.user.mdp,
      'nom': this.user.nom
    });
  }

  submitForm() {
    if (this.userForm.valid ) {
      this.user.nom = this.userForm.value.nom;
      this.user.mdp = this.userForm.value.mdp;
      this.user.email = this.userForm.value.email;
      this.userServ.add(this.userForm.value).subscribe(
        userFromDb => {
          localStorage.setItem('user', JSON.stringify(userFromDb));
        }
      );
    }
  }
}
