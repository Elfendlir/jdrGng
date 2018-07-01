import { Component, OnInit } from '@angular/core';
import {PartieService} from '../services/partie.service';
import * as myGlobals from '../globals';

@Component({
  selector: 'app-list-parties',
  templateUrl: './list-parties.component.html',
  styleUrls: ['./list-parties.component.css']
})
export class ListPartiesComponent implements OnInit {
  parties;
  imgUrl;
  constructor(private servicePartie: PartieService) { }

  ngOnInit() {
    this.getParties();
    this.imgUrl = myGlobals.imagesPath;
  }

  getParties(): void {
    this.servicePartie.list().subscribe(
      repParties => this.parties = repParties
    );
  }

  lancerPartie(partie): void {
    alert('Partie ID : ' + partie.id);
  }

}
