export class MovieModel {
  public id: number;
  public name: string;
  public directorName: string;
  public releaseYear: number;
  public status: string;

  constructor(
    id: number,
    name: string,
    directorName: string,
    releaseYear: number,
    status: string
  ) {
    this.id = id;
    this.name = name;
    this.directorName = directorName;
    this.releaseYear = releaseYear;
    this.status = status;
  }
}
