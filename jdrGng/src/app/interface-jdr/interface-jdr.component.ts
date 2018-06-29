import {Component, Input, OnInit} from '@angular/core';
import {Partie} from "../classes/partie";

@Component({
  selector: 'app-interface-jdr',
  templateUrl: './interface-jdr.component.html',
  styleUrls: ['./interface-jdr.component.css']
})
export class InterfaceJdrComponent implements OnInit {

  //@Input() partieEnCours: Partie;

  constructor() { }

  ngOnInit() {
  }
}
