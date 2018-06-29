import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icone-options',
  templateUrl: './icone-options.component.html',
  styleUrls: ['./icone-options.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IconeOptionsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
