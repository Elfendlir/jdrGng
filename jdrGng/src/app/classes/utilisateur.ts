import {Partie} from "./partie";

export class Utilisateur {
  public id: number;
  public nom: string;
  public email: string;
  public mdp: string;
  public listeParties: Set<Partie>
  constructor(
  ) {}
}
