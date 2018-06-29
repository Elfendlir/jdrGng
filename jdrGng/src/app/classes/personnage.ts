import {Partie} from "./partie";
import {Inventaire} from "./inventaire";

export class Personnage {

  constructor(
    private id: number,
    private name: string,
    private image: string,
    private job: string,
    private partie: Partie,
    private inventaire: Inventaire
  ) {}
}
