import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Personnage} from "../classes/personnage";
import {PersonnageService} from "../services/personnage.service";
import * as myGlobals from "../globals";

@Component({
  selector: 'app-icone-personnage',
  templateUrl: './icone-personnage.component.html',
  styleUrls: ['./icone-personnage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IconePersonnageComponent implements OnInit {

  id: number;
  imagesPath;
  personnage: Personnage;

  constructor(private modalService: NgbModal, private personnageService: PersonnageService) {

  }

  ngOnInit() {
    this.imagesPath = myGlobals.imagesPath;
    this.personnageService.getOne(1).subscribe(
      personnage => {
        this.personnage = personnage
      });
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
