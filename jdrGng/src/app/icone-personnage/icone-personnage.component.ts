import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Personnage} from "../classes/personnage";
import {PersonnageService} from "../services/personnage.service";

@Component({
  selector: 'app-icone-personnage',
  templateUrl: './icone-personnage.component.html',
  styleUrls: ['./icone-personnage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IconePersonnageComponent implements OnInit {

  personnage: Personnage;

  constructor(private modalService: NgbModal, private personnageService: PersonnageService) { }

  ngOnInit() {
    this.personnageService.getOne(1).subscribe(
      personnage => {
        this.personnage = personnage
      });
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
