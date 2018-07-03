import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouteService} from '../services/route.service';
import {Route} from '../classes/route';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

  constructor(private routeService: RouteService) { }

  @Output() route = new EventEmitter<Route>();
  @Output() changeRoute = new EventEmitter<Route>();
  @Input() scenario;
  @Input() listRoutes;
  lastTarget;
  ngOnInit() {
    // this.routeService.getRoutesByScenarioId(this.scenario.id).subscribe(
    //   laRep => this.listRoutes = laRep
    // );
  }

  addRoute(route) {
    this.route.emit(route);
  }

  changeCurrentRoute(event, route) {
    event.target.className = 'blue-back';
    if (this.lastTarget !== undefined)
    {
      this.lastTarget.className = '';
    }
    this.lastTarget = event.target;
    this.changeRoute.emit(route);
  }
}
