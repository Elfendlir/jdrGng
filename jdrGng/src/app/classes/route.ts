import {Scenario} from "./scenario";
import {Item} from "./item";
import {Partie} from "./partie";

export class Route {

  constructor(
    public id: number,
    public scene: string,
    public imageScene: string,
    public premiereRoute: boolean,
    public listeParties: Set<Partie>,
    public routeInitiale: Route,
    public listeRoutesSuivantes: Set<Route>,
    public listeItemsRoute: Set<Item>,
    public scenario: Scenario
  ) {}
}
