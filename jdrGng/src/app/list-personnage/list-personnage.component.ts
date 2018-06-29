import { Component, OnInit } from '@angular/core';
import {PersonnageService} from '../services/personnage.service';
import * as myGlobals from '../globals';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadFileService} from '../services/upload-file.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-personnage',
  templateUrl: './list-personnage.component.html',
  styleUrls: ['./list-personnage.component.css']
})
export class ListPersonnageComponent implements OnInit {

  listPersos;
  perso;
  imagesPath;
  personnageForm: FormGroup;
  jobEnum = JobEnum;
  keys;
  // Sert pour l'input de l'image
  selectedFile: File;
  fileName;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private  persoServ: PersonnageService,
              private fb: FormBuilder,
              private uploadService: UploadFileService,
              private modalService: NgbModal) {
    this.keys = Object.keys(this.jobEnum).filter(f => !isNaN(Number(f)));
  }

  ngOnInit() {
    this.imagesPath = myGlobals.imagesPath;
    this.getListPersos();
    this.personnageForm = this.fb.group({
      'id': '',
      'image': '',
      'job': '',
      'name': ['',
        Validators.compose(
          [Validators.required]
        )],
      'inventaire': '',
      'partie': null
    });
  }

  getListPersos() {
    this.persoServ.list().subscribe(
      lesPersos => this.listPersos = lesPersos
    );
  }
  submitForm() {
    if (this.personnageForm.valid)
    {
      delete this.perso.partie;
      console.log(this.perso);
      if (this.personnageForm.value.image !== '')
      {
        console.log(this.fileName);
        this.perso.image = this.fileName;
      }
      this.perso.name  = this.personnageForm.value.name;
      this.perso.job   = this.personnageForm.value.job;
      this.persoServ.update(this.perso).subscribe(
        () => {
          this.onUpload();
          this.getListPersos();
        }
      );
    }
  }
  deletePerso(perso) {
    this.persoServ.delete(perso.id).subscribe(
      () => {
        console.log('deleted !');
      }
    );
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
  open(content, perso) {
    this.perso = perso;
    this.modalService.open(content).result.then((result) => {}, (reason) => {});
  }
}
export enum JobEnum {
  Mage     = 0,
  Guerrier = 1,
  Voleur   = 2,
  Paladin  = 3
}
