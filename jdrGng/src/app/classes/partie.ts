import {Personnage} from "./personnage";
import {Scenario} from "./scenario";
import {Utilisateur} from "./utilisateur";

export class Partie {

  constructor(
    public id: number,
    public perso: Personnage,
    public scenario: Scenario,
    public user: Utilisateur
  ) {}
}
