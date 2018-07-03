import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icone-quitter',
  templateUrl: './icone-quitter.component.html',
  styleUrls: ['./icone-quitter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IconeQuitterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  //TODO la fonction closeApplication ne fonctionne pas pour le momment
  closeApplication() {
    if (confirm('Do you really want to close the application?')) {
      window.open('','_parent','');
      window.close();
    }
  }
}
