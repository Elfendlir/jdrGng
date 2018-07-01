import {Route} from "./route";
import {Partie} from "./partie";

export class Scenario {

  constructor(
    public id: number,
    public titre: string,
    public image: string,
    public listeRoutes: Set<Route>,
    public listeParties: Set<Partie>
  ) {}
}
