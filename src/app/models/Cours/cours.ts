export class Cours {
  public idCours: number = 0;
  private titre: String;
  private description: String;
  private duree: String;
  private langue: String;
  private nbrDeVue: number = 0;
  private image: String;
  private createdBy: number;
  private dateCreation: Date;


  constructor(titre: String, des: String, duree: String, langue: String, createdBy: number,image) {
    this.titre = titre;
    this.description = des;
    this.duree = duree;
    this.langue = langue;
    this.createdBy = createdBy;
    this.image=image;
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

  setDuree(duree: String) {
    this.duree = duree;
  }

  setLangue(langue: String) {
    this.langue = langue;
  }

  setNbrDeVue(nbrDeVue: number) {
    this.nbrDeVue = nbrDeVue;
  }
  getImage() {
    return this.image;
  }
  setImage(img: String) {
    this.image = img;
  }
  getCreatedBy() {
    return this.createdBy;
  }
  setCreatedBy(createdBy: number) {
    this.createdBy = createdBy;
  }

  getDateCreation() {
    return this.dateCreation;
  }
  setDateCreation(dateCreation: Date) {
    this.dateCreation = dateCreation;
  }
}
