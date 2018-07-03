import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../services/personnage.service';
import {PartieService} from '../services/partie.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InventaireService} from '../services/inventaire.service';
import {ScenarioService} from '../services/scenario.service';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadFileService} from '../services/upload-file.service';
import * as myGlobals from '../globals';
import {RouteService} from "../services/route.service";

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent implements OnInit {
  // Le chemin des images sur l'API_REST
  imagesPath;
  /* Les listes de persos & scenarios qui vont etre affichés dans les choix de persos*/
  persos;
  scenarios;
  personnageForm: FormGroup;
  // L'enum pour les options du select de la vue
  // TODO : Remplacer par un service allant chercher les enums de l'api
  jobEnum =  JobEnum;
  // Le keys sert pour le bon formatage de l'objet personnage avec les enums
  keys;
  // Pour creer un inventaire null
  inventaire;
  returnedPerso;
  // Boolean pour afficher/masquer le formulaire de creation de perso
  isCreatingPerso: Boolean = false;
  // Sert pour l'input de l'image
  selectedFile: File;
  fileName;
  progress: { percentage: number } = { percentage: 0 };
  // Pour avoir un retour utilisateur à la création d'un personnage
  alert: IAlert;
  // Les objets utilisés pour la création de partie
  persoSelected;
  scenarioSelected;
  partieCreated;
  // Sers pour l'affichage CSS de la selection du perso/scenario
  lastSelectedPerso;
  lastSelectedScen;
  // Sers pour définir la current route de la partie
  //currentRoute;

  constructor(private persoService: PersonnageService,
              private inventaireService: InventaireService,
              private scenarioService: ScenarioService,
              private fb: FormBuilder,
              private uploadService: UploadFileService,
              private partieService: PartieService,
              private routeService: RouteService,
              private http: HttpClient) {
    this.keys = Object.keys(this.jobEnum).filter(f => !isNaN(Number(f)));
  }

  ngOnInit() {
    this.imagesPath = myGlobals.imagesPath;
    this.getScenario();
    this.getPersos();
    this.personnageForm = this.fb.group({
      'image': ['',
          Validators.compose(
          [Validators.required]
        )],
      'job': '',
      'name': ['',
        Validators.compose(
          [Validators.required]
        )],
      'inventaire': '',
      'partie': null
    });
  }
  /**
   * @Author Payen Guillaume
   * @Date 27/06/2018
   * Les Services get pour la liste de persos et scenarios
   */
  getScenario(): void {
    this.scenarioService.list().subscribe(
      listScen => this.scenarios = listScen,
      () => function () {}
    );
  }
  getPersos(): void {
    this.persoService.findFreePersonnages().subscribe(
      listPersos => this.persos = listPersos,
      () => function () {},
      () => {
      }
    );
  }

  /**
   * @Author Payen Guillaume
   * @Date 27/06/2018
   * Les services de création
   */
  createInventaireAndPerso(): void {
    this.inventaire = {};
    this.inventaireService.add(this.inventaire).subscribe(
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
    this.personnageForm.value.image = this.fileName;
    this.persoService.add(this.personnageForm.value).subscribe(
      repPerso => this.returnedPerso = repPerso,
      () => {},
      () => {
        this.getPersos();
        this.onUpload();
        this.alert = {
          id: 1,
          type: 'success',
          message: 'Le personnage a bien été créé !',
        };
      }
    );
  }
  createPartie() {
    //TODO
    //Récupère la route initiale du scénario
    //this.routeService.getRouteInitiale(this.scenarioSelected.id).subscribe(
    //routeSelected => this.currentRoute = routeSelected
    //);
    const partie = {
      'id': 0,
      'perso'   : this.persoSelected,
      'scenario': this.scenarioSelected,
      //TODO
      //Définit la route initiale comme currentRoute a la création de la partie
      //'currentRoute': this.currentRoute,
      'currentRoute': null,
      'user'    : null
    };
    console.log(partie);
    this.partieService.add(partie).subscribe(
      repPartie => this.partieCreated = repPartie,
      () => {},
      () => {
        console.log(this.partieCreated);
      }
    );
    this.alert = {
      id: 2,
      type: 'success',
      message: 'La partie a bien été créé !',
    };
  }

  /**
   * @Author Payen Guillaume
   * @Date 27/06/2018
   * La fonction submit du formulaire
   */
  submitForm() {
    if (this.personnageForm.valid) {
      this.createInventaireAndPerso();
    } else {
      this.alert = {
        id: 1,
        type: 'error',
        message: 'Remplissez correctement le formulaire !',
      };
    }
  }

  /**
   *
   * @Author Payen Guillaume
   * @Date 27/06/2018
   * Selection du perso et scenario pour création de partie
   */
  selectPerso(event, perso) {
    if (!event.currentTarget.classList.contains('cardIsSelected'))
    {
      event.currentTarget.classList.add('cardIsSelected');
      this.persoSelected = perso;
      if (this.lastSelectedPerso !== undefined && this.lastSelectedPerso !== event.currentTarget)
      {
        this.lastSelectedPerso.classList.remove('cardIsSelected');
      }
      this.lastSelectedPerso = event.currentTarget;
    } else {
      event.currentTarget.classList.remove('cardIsSelected');
      this.persoSelected = undefined;
    }
  }
  selectScenario(event, scen) {
    if (!event.currentTarget.classList.contains('cardIsSelected'))
    {
      event.currentTarget.classList.add('cardIsSelected');
      this.scenarioSelected = scen;
      if (this.lastSelectedScen !== undefined && this.lastSelectedScen !== event.currentTarget) {
        this.lastSelectedScen.classList.remove('cardIsSelected');
      }
      this.lastSelectedScen = event.currentTarget;
    } else {
      event.currentTarget.classList.remove('cardIsSelected');
      this.scenarioSelected = undefined;
    }
  }
  showFormPerso(): void {
    this.isCreatingPerso = (this.isCreatingPerso) ? false : true;
  }
  public closeAlert(alert: IAlert) {
    this.alert = undefined;
  }

  /**
   * @Author Payen Guillaume
   * @Date 27/06/2018
   * Gestion de l'upload des images
   * TODO : Afficher une progress barre de l'upload
   * Source : http://javasampleapproach.com/java-integration/angular-5-upload-get-images-to-from-spring-boot-server#12_Create_Storage_Service_for_File_Systems
   */
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.fileName     = event.target.files[0].name;
  }
  onUpload() {
    this.progress.percentage = 0;
    this.uploadService.pushFileToStorage(this.selectedFile).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFile = undefined;
  }

  /**
   * @Author Payen Guillaume
   * @Date 27/06/2018
   * Lancement de la partie
   */
  lancerPartie() {
    console.log(this.persoSelected);
    console.log(this.scenarioSelected);
    if (this.scenarioSelected === undefined || this.persoSelected === undefined)
    {
      alert('Veuillez selectionner un personnage et un scenario !');
    } else {
      this.createPartie();
    }
  }
}
// TODO : Changer systeme enum
export enum JobEnum {
  Mage     = 0,
  Guerrier = 1,
  Voleur   = 2,
  Paladin  = 3
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
