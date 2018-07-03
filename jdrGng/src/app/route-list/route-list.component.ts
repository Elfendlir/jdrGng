import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RouteService} from '../services/route.service';
import {Route} from '../classes/route';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

  constructor(private routeService: RouteService) { }

  listRoutes;
  @Output() route = new EventEmitter<Route>();

  ngOnInit() {
    this.routeService.list().subscribe(
      laRep => this.listRoutes = laRep
    );
  }

  addRoute(route) {
    this.route.emit(route);
  }
}
