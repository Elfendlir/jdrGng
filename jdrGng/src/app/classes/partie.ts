import {Personnage} from "./personnage";
import {Scenario} from "./scenario";
import {Utilisateur} from "./utilisateur";

export class Partie {

  constructor(
    id: number,
    perso: Personnage,
    scenario: Scenario,
    user: Utilisateur
  ) {}
}
