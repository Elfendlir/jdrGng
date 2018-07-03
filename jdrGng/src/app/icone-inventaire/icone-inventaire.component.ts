import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Partie} from "../classes/partie";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-icone-inventaire',
  templateUrl: './icone-inventaire.component.html',
  styleUrls: ['./icone-inventaire.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class IconeInventaireComponent implements OnInit {

  @Input() partieEnCours: Partie;
  listItems;

  constructor(private modalService: NgbModal, private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.list().subscribe(
      listeDesItems => this.listItems = listeDesItems
    )
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
