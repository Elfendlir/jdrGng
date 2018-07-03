import {Component, Input, OnInit} from '@angular/core';
import {Partie} from "../classes/partie";

@Component({
  selector: 'app-barre-menu',
  templateUrl: './barre-menu.component.html',
  styleUrls: ['./barre-menu.component.css']
})
export class BarreMenuComponent implements OnInit {

  @Input() partieEnCours: Partie;

  constructor() { }

  ngOnInit() {
  }

}
