import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RouteService} from '../services/route.service';
import {Route} from '../classes/route';

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
  route;
  ngOnInit() {
    this.routeForm = this.fb.group({
      'scene': [ '' ,
        Validators.compose([Validators.required])],
      'scenario': this.scenario,
      'titre': '',
      'listeRoutesSuivantes': []
    });
  }
  addRouteToCurrentScene(route)
  {
    if (this.routeForm.value.listeRoutesSuivantes === null)
    {
      this.routeForm.value.listeRoutesSuivantes = [route];
    }
    else
    {
      this.routeForm.value.listeRoutesSuivantes.push(route);
    }
    console.log('++++++++');
    console.log(this.routeForm.value);
    console.log('++++++++');
  }
  submitForm() {
    this.formSubmitted = true;

    if (this.routeForm.valid ) {
      console.log('---------');
      console.log(this.routeForm.value);
      console.log('---------');
      this.cs.add(this.routeForm.value).subscribe(
        routeFromDb => {
          console.log('//////////');
          console.log(routeFromDb);
          console.log('//////////');
        },
        () => {
          console.log('error');
        },
        () => {
          console.log('YOU WIN ?!');
        }
      );
    }
  }
}
