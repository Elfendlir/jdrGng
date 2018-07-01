import {Partie} from "./partie";

export class Utilisateur {

  constructor(
    public id: number,
    public nom: string,
    public email: string,
    public mdp: string,
    public listeParties: Set<Partie>
  ) {}
}
