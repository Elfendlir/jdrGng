import {Item} from "./item";
import {Personnage} from "./personnage";

export class Inventaire {

  constructor(
    id: number,
    listeItemsInventaire: Set<Item>,
    personnage: Personnage
  ) {}
}
