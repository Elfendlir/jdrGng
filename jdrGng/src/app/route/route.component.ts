import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RouteService} from '../services/route.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  routeForm: FormGroup;
  formSubmitted = false;


  constructor(private fb: FormBuilder, private cs: RouteService) { }

  @Input() scenario;

  ngOnInit() {
    this.routeForm = this.fb.group({
      'scene': [ '' ,
        Validators.compose([Validators.required])],
      'scenario': this.scenario,
      'titre': '',
      'listeRoutesSuivantes': []
    });
  }

  maFonction(routelist) {
      this.routeForm.value.listeRoutesSuivantes = routelist;
  }

  submitForm() {
    this.formSubmitted = true;
      console.log(this.scenario.id);
    console.log(this.routeForm);
    if (this.routeForm.valid ) {
      this.cs.add(this.routeForm.value).subscribe(
        routeFromDb => {
          console.log(routeFromDb);
        }
      );
    }
  }
}
