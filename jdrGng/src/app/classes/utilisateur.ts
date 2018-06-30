import {Partie} from "./partie";

export class Utilisateur {

  constructor(
    private id: number,
    private nom: string,
    private email: string,
    private mdp: string,
    private listeParties: Set<Partie>
  ) {}
}
