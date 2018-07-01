import {Inventaire} from "./inventaire";
import {Route} from "./route";

export class Item {

  constructor(
    public id: number,
    public nomItem: string,
    public description: string,
    public imageItem: string,
    public listeInventaires: Set<Inventaire>,
    public listeRoutes: Set<Route>
  ) {}
}
