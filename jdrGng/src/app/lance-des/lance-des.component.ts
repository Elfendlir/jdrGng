import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-lance-des',
  templateUrl: './lance-des.component.html',
  styleUrls: ['./lance-des.component.css']
})
export class LanceDesComponent implements OnInit {

  randomResult: number;
  resultat: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  lancerDes(content) {
    this.randomResult = Math.floor((Math.random() * 100) + 1);
    if (this.randomResult == 1){
      this.resultat = 'ECHEC CRITIQUE !!!';
    } else if (this.randomResult == 100) {
      this.resultat = 'REUSSITE CRITIQUE !!!';
    } else if (this.randomResult > 1 && this.randomResult < 50) {
      this.resultat = 'ECHEC';
    } else if (this.randomResult >= 50 && this.randomResult < 100) {
      this.resultat = 'REUSSITE';
    }
    this.modalService.open(content, { centered: true });
  }
}
