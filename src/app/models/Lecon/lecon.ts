export class Lecon {
  private idLecon: number = 0;
  private titre: string;
  private description: string;
  private contenu: string;

  constructor(idLecon: number, titre: string, description: string, contenu: string) {
    this.idLecon = idLecon;
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
}
