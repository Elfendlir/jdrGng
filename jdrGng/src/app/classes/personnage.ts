import {Partie} from "./partie";
import {Inventaire} from "./inventaire";

export class Personnage {

  constructor(
    public id: number,
    public name: string,
    public image: string,
    public job: string,
    public partie: Partie,
    public inventaire: Inventaire
  ) {}
}
