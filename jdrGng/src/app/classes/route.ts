import {Scenario} from "./scenario";
import {Item} from "./item";

export class Route {

  constructor(
    private id: number,
    private scene: string,
    private imageScene: string,
    private routeInitiale: Route,
    private listeRoutesSuivantes: Set<Route>,
    private listeItemsRoute: Set<Item>,
    private scenario: Scenario
  ) {}
}
