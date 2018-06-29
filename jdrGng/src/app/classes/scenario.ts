import {Route} from "./route";
import {Partie} from "./partie";

export class Scenario {

  constructor(
    id: number,
    titre: string,
    listeRoutes: Set<Route>,
    listeParties: Set<Partie>
  ) {}
}
