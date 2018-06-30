import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PartieService} from "../services/partie.service";

@Component({
  selector: 'app-interface-jdr',
  templateUrl: './interface-jdr.component.html',
  styleUrls: ['./interface-jdr.component.css']
})
export class InterfaceJdrComponent implements OnInit {

  idPartieEnCours;
  partieEnCours;

  constructor(private route: ActivatedRoute, private partieService: PartieService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.idPartieEnCours = params['id'];
      });
    this.partieService.getOne(this.idPartieEnCours).subscribe(
      partieSelected => this.partieEnCours = partieSelected
    );
  }
}
