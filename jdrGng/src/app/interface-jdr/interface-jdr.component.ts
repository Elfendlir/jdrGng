import {Component, Input, OnInit} from '@angular/core';
import {Partie} from "../classes/partie";
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-interface-jdr',
  templateUrl: './interface-jdr.component.html',
  styleUrls: ['./interface-jdr.component.css']
})
export class InterfaceJdrComponent implements OnInit {

  //@Input() partieEnCours: Partie;
  partieId: number;
  constructor(private activatedRoute: ActivatedRoute) {
      this.partieId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }
}
