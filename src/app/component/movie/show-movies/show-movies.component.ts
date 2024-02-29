import {
  AfterContentChecked,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MovieModel } from 'src/app/model/movieModel';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css'],
})
export class ShowMoviesComponent implements OnInit, OnChanges {
  @Input()
  movies!: MovieModel[];

  columnsName: string[] = [
    'id',
    'name',
    'directorName',
    'releaseYear',
    'status',
  ];

  MovieList: MatTableDataSource<MovieModel> =
    new MatTableDataSource<MovieModel>(this.movies);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.movies);
    this.MovieList = new MatTableDataSource<MovieModel>(this.movies);
    this.MovieList.paginator = this.paginator;
  }
}
