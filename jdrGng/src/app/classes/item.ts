import {Inventaire} from "./inventaire";
import {Route} from "./route";

export class Item {

  constructor(
    private id: number,
    private nomItem: string,
    private description: string,
    private imageItem: string,
    private listeInventaires: Set<Inventaire>,
    private listeRoutes: Set<Route>
  ) {}
}
