import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as myGlobals from "../globals";
import {Partie} from "../classes/partie";

@Component({
  selector: 'app-icone-personnage',
  templateUrl: './icone-personnage.component.html',
  styleUrls: ['./icone-personnage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IconePersonnageComponent implements OnInit {

  @Input() partieEnCours: Partie;
  id: number;
  imagesPath;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this.imagesPath = myGlobals.imagesPath;
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
