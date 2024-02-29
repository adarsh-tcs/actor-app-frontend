import { MovieModel } from './movieModel';

export class ActorModel {
  public id?: number;
  public name: string;
  public emailId: string;
  public dateOfBirth: Date;
  public mobile: number;
  public fee: number;
  public movieDto: MovieModel[] = [];

  constructor(
    // id: number,
    name: string,
    emailId: string,
    dateOfBirth: Date,
    mobile: number,
    fee: number,
    movieDto: any[]
  ) {
    // this.id = id;
    this.name = name;
    this.emailId = emailId;
    this.dateOfBirth = dateOfBirth;
    this.mobile = mobile;
    this.fee = fee;
    for (let movie of movieDto) {
      this.movieDto.push(
        new MovieModel(
          movie.id,
          movie.movieName,
          movie.directorName,
          movie.releaseYear,
          movie.status
        )
      );
    }
  }
}
