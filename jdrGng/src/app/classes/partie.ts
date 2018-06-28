import {Personnage} from "./personnage";
import {Scenario} from "./scenario";
import {Utilisateur} from "./utilisateur";

export class Partie {

  constructor(
    id: number,
    scenario: Scenario,
    perso: Personnage,
    user: Utilisateur
  ) {}
}
