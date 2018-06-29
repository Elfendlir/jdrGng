import {Scenario} from "./scenario";
import {Item} from "./item";

export class Route {

  constructor(
    id: number,
    scene: string,
    imageScene: string,
    routeInitiale: Route,
    listeRoutesSuivantes: Set<Route>,
    listeItemsRoute: Set<Item>,
    scenario: Scenario
  ) {}
}
