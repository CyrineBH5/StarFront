export class Cours {
  public idCours: number = 0;
  private titre: String;
  private description: String;
  private duree: number;
  private langue: String;
  private nbrDeVue: number = 0;

  constructor(titre: String, des: String, duree: number, langue: String) {
    this.titre = titre;
    this.description = des;
    this.duree = duree;
    this.langue = langue;
  }

  getIdCours() {
    return this.idCours;
  }

  getTitre() {
    return this.titre;
  }

  getDescription() {
    return this.description;
  }

  getDuree() {
    return this.duree;
  }

  getLangue() {
    return this.langue;
  }

  getNbrDeVue() {
    return this.nbrDeVue;
  }

  setIdCours(idCours: number) {
    this.idCours = idCours;
  }

  setTitre(titre: String) {
    this.titre = titre;
  }

  setDescription(description: String) {
    this.description = description;
  }

  setDuree(duree: number) {
    this.duree = duree;
  }

  setLangue(langue: String) {
    this.langue = langue;
  }

  setNbrDeVue(nbrDeVue: number) {
    this.nbrDeVue = nbrDeVue;
  }
}
