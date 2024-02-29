import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormControl,
  FormGroup,
  RequiredValidator,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  addMoviesForm!: FormGroup;
  selectOptions: string[] = [
    'Release in Theater',
    'Released on OTT',
    'Available in DVD Only',
    'Upcoming',
  ];

  constructor() {}

  ngOnInit(): void {
    this.addMoviesForm = new FormGroup({
      movieName: new FormControl(null, Validators.required),
      directorName: new FormControl(null),
      releaseYear: new FormControl(null),
      status: new FormControl('', [
        Validators.required,
        this.validatedMovieStatus.bind(this),
      ]),
    });
  }

  validatedMovieStatus(control: FormControl): ValidationErrors | null {
    if (this.selectOptions.indexOf(control.value) < 0) {
      return { invalidStatusSelected: true };
    }
    return null;
  }
}
