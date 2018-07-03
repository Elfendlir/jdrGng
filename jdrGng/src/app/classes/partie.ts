import {Personnage} from "./personnage";
import {Scenario} from "./scenario";
import {Utilisateur} from "./utilisateur";
import {Route} from "./route";

export class Partie {

  constructor(
    public id: number,
    public perso: Personnage,
    public scenario: Scenario,
    public currentRoute: Route,
    public user: Utilisateur
  ) {}
}
