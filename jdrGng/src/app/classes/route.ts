import {Scenario} from "./scenario";
import {Item} from "./item";

export class Route {

  constructor(
    public id: number,
    public scene: string,
    public imageScene: string,
    public routeInitiale: Route,
    //public listeParties: Set<Partie>,
    public listeRoutesSuivantes: Set<Route>,
    public listeItemsRoute: Set<Item>,
    public scenario: Scenario
  ) {}
}
