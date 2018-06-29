import {Partie} from "./partie";

export class Utilisateur {

  constructor(
    id: number,
    nom: string,
    email: string,
    mdp: string,
    listeParties: Set<Partie>
  ) {}
}
