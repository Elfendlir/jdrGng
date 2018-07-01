import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lance-des',
  templateUrl: './lance-des.component.html',
  styleUrls: ['./lance-des.component.css']
})
export class LanceDesComponent implements OnInit {

  randomResult: number;
  resultat: string;

  constructor() { }

  ngOnInit() {
  }

  lancerDes() {
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
    alert('Votre score est de : ' + this.randomResult + ' , ' + this.resultat);
  }
}
