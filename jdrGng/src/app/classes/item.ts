import {Inventaire} from "./inventaire";
import {Route} from "./route";

export class Item {

  constructor(
    id: number,
    nomItem: string,
    description: string,
    imageItem: string,
    listeInventaires: Set<Inventaire>,
    listeRoutes: Set<Route>
  ) {}
}
