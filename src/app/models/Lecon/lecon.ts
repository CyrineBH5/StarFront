export class Lecon {
  private idLecon: number = 0;
  private titre: string;
  private description: string;
  private contenu: string;
  private idCours: number;

  constructor( titre: string, description: string, contenu: string , idCours: number) {
    this.idCours = idCours;
    this.titre = titre;
    this.description = description;
    this.contenu = contenu;
  }

  getIdLecon() {
    return this.idLecon;
  }

  getTitre() {
    return this.titre;
  }

  getDescription() {
    return this.description;
  }

  getContenu() {
    return this.contenu;
  }

  getIdCours() {
    return this.idCours ;
  }

  setIdLecon(idLecon: number) {
    this.idLecon = idLecon;
  }

  setTitre(titre: string) {
    this.titre = titre;
  }

  setDescription(description: string) {
    this.description = description;
  }

  setContenu(contenu: string) {
    this.contenu = contenu;
  }
  setidCours(idCours: number) {
    this.idCours = idCours;
  }

}
