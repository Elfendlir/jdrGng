import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icone-inventaire',
  templateUrl: './icone-inventaire.component.html',
  styleUrls: ['./icone-inventaire.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class IconeInventaireComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
