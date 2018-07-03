import {Item} from "./item";
import {Personnage} from "./personnage";

export class Inventaire {

  constructor(
    public id: number,
    public listeItemsInventaire: Set<Item>,
    public personnage: Personnage
  ) {}
}
