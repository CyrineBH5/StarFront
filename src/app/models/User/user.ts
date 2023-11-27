export class User {
  private idUtilisateur: number;
  private nomPrenom: string;
  private adresse: string;
  private photo: string;
  private grade: string;
  private role: string;
  private email: string;
  private mdp: string;

  constructor(
    nomPrenom: string,
    adresse: string,
    photo: string,
    grade: string,
    role: string,
    email: string,
    mdp: string
  ) {
    this.nomPrenom = nomPrenom;
    this.adresse = adresse;
    this.photo = photo;
    this.grade = grade;
    this.role = role;
    this.email = email;
    this.mdp = mdp;
  }

  // Getters
  getIdUtilisateur(): number {
    return this.idUtilisateur;
  }

  getNomPrenom(): string {
    return this.nomPrenom;
  }

  getAdresse(): string {
    return this.adresse;
  }

  getPhoto(): string {
    return this.photo;
  }

  getGrade(): string {
    return this.grade;
  }

  getRole(): string {
    return this.role;
  }

  getEmail(): string {
    return this.email;
  }

  getMdp(): string {
    return this.mdp;
  }

  // Setters
  setIdUtilisateur(idUtilisateur: number): void {
    this.idUtilisateur = idUtilisateur;
  }

  setNomPrenom(nomPrenom: string): void {
    this.nomPrenom = nomPrenom;
  }

  setAdresse(adresse: string): void {
    this.adresse = adresse;
  }

  setPhoto(photo: string): void {
    this.photo = photo;
  }

  setGrade(grade: string): void {
    this.grade = grade;
  }

  setRole(role: string): void {
    this.role = role;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setMdp(mdp: string): void {
    this.mdp = mdp;
  }




}
