import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icone-profil',
  templateUrl: './icone-profil.component.html',
  styleUrls: ['./icone-profil.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class IconeProfilComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
