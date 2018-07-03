import {Component, Input, OnInit} from '@angular/core';
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
  listRoutes;

  constructor(private fb: FormBuilder, private cs: RouteService) { }

  @Input() scenario;
  route;
  ngOnInit() {
    this.getRoutesByScenarioId();
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
  changeCurrentRoute(route)
  {
    this.route = route;
  }
  getRoutesByScenarioId() {
    this.cs.getRoutesByScenarioId(this.scenario.id).subscribe(
      laRep => this.listRoutes = laRep
    );
  }
  submitForm() {
    this.formSubmitted = true;

    if (this.routeForm.valid ) {
      if (this.route !== undefined)
      {
        this.cs.update(this.route).subscribe(
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
            this.getRoutesByScenarioId();
          }
        );
      }
      else
      {
        this.cs.update(this.routeForm.value).subscribe(
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
            this.getRoutesByScenarioId();
          }
        );
      }
    }
  }
}
