import {Item} from "./item";
import {Personnage} from "./personnage";

export class Inventaire {

  constructor(
    private id: number,
    private listeItemsInventaire: Set<Item>,
    private personnage: Personnage
  ) {}
}
