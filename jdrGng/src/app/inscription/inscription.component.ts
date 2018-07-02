import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from '../services/utilisateur.service';
import {Utilisateur} from '../classes/utilisateur';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  user: Utilisateur = new Utilisateur();
  userForm2: FormGroup;
  @Output() newUser = new EventEmitter<Utilisateur>();
  constructor(private userServ: UtilisateurService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm2 = this.fb.group({
      'email': ['',
        Validators.compose(
          [Validators.required]
        )],
      'mdp': ['',
        Validators.compose(
          [Validators.required]
        )],
      'mdpConfirm': ['',
        Validators.compose(
          [Validators.required]
        )],
      'name': ['',
        Validators.compose(
          [Validators.required]
        )]
    });
  }
  submitForm ()
  {
    if (this.userForm2.valid) {
      if (this.userForm2.value.mdp === this.userForm2.value.mdpConfirm)
      {
        this.user.email = this.userForm2.value.email;
        this.user.nom   = this.userForm2.value.name;
        this.user.mdp   = this.userForm2.value.mdp;
        this.userServ.add(this.user).subscribe(
          newUser => this.user = newUser,
          () => {},
          () => {
            //localStorage.setItem('user', JSON.stringify(this.user));
            this.newUser.emit(this.user);
          }
        );
      }
    } else {
      console.log('Form not valid.');
    }
  }

}
