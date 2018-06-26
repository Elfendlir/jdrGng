import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../services/personnage.service';
import {PartieService} from '../services/partie.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InventaireService} from '../services/inventaire.service';
import {ScenarioService} from '../services/scenario.service';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent implements OnInit {

  persos;
  personnageForm: FormGroup;
  //L'enum pour les options du select de la vue
  jobEnum =  JobEnum;
  //Le keys sert pour le bon formatage de l'objet personnage avec les enums
  keys;
  inventaire;
  returnedPerso;
  //Boolean pour afficher/masquer le formulaire de creation de perso
  isCreatingPerso: Boolean = false;
  scenarios;
  constructor(private persoService: PersonnageService,
              private inventaireService: InventaireService,
              private scenarioService: ScenarioService,
              private fb: FormBuilder) {
    this.keys = Object.keys(this.jobEnum).filter(f => !isNaN(Number(f)));
  }

  ngOnInit() {
    this.getScenario();
    this.getPersos();
    this.personnageForm = this.fb.group({
      'image': '',
      'job': '',
      'name': '',
      'inventaire': '',
      'partie': null
    });
  }
  getScenario(): void {
    this.scenarioService.list().subscribe(
      listScen => this.scenarios = listScen,
      () => function () {}
    );
  }
  getPersos(): void {
    this.persoService.list().subscribe(
      listPersos => this.persos = listPersos,
      () => function () {}
    );
  }
  createInventaireAndPerso(): void {
    this.inventaire = {};
    this.inventaireService.add({}).subscribe(
      leInventaire => {
        this.inventaire = leInventaire;
      },
      () => {},
      () => {
        this.createPersonnage();
      }
    );
  }
  createPersonnage(): void {
    this.personnageForm.value.inventaire = this.inventaire;
    this.persoService.add(this.personnageForm.value).subscribe(
      repPerso => this.returnedPerso = repPerso
    );
  }
  submitForm() {
    this.createInventaireAndPerso();
  }

  showFormPerso(): void {
    this.isCreatingPerso = (this.isCreatingPerso) ? false : true;
  }
}

export enum JobEnum {
  Mage     = 0,
  Guerrier = 1,
  Voleur   = 2,
  Paladin  = 3
}
