import {Route} from "./route";
import {Partie} from "./partie";

export class Scenario {

  constructor(
    private id: number,
    private titre: string,
    private listeRoutes: Set<Route>,
    private listeParties: Set<Partie>
  ) {}
}
