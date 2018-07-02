import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RouteService} from '../services/route.service';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

  constructor(private routeService: RouteService) { }

  route;
  @Output() listRoutes = new EventEmitter<any>();
  ngOnInit() {
    this.routeService.list().subscribe(
      laRep => this.route = laRep
    );
  }
}
