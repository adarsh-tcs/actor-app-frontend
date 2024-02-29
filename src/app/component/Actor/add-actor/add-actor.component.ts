import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActorModel } from 'src/app/model/actorModel';
import { ActorService } from 'src/app/service/actor/actor-service.service';
import { SelectOptions } from 'src/app/model/movieStatus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css'],
})
export class AddActorComponent implements OnInit {
  actor!: ActorModel;
  validDobDate: Date = new Date();
  addActorForm!: FormGroup;
  errorMessage: string = '';
  errorMessageMovie: string = '';
  movieStatus = SelectOptions;
  movieCount: number = 0;

  constructor(
    private actorService: ActorService,
    private router: Router,
    private actorElement: ElementRef
  ) {}

  ngOnInit(): void {
    this.addActorForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),
      emailId: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{10}'),
      ]),
      dob: new FormControl(null, [
        Validators.required,
        this.validDob.bind(this),
      ]),
      fee: new FormControl(null, [Validators.required, Validators.min(0)]),
      movieForm: new FormArray([]),
    });
  }

  get movieForm(): FormArray {
    return this.addActorForm.get('movieForm') as FormArray;
  }

  addMovie() {
    const addMoviesForm = new FormGroup({
      movieName: new FormControl(null, Validators.required),
      directorName: new FormControl(null),
      releaseYear: new FormControl(null, Validators.pattern('^[0-9]{4}')),
      status: new FormControl('-1', {
        nonNullable: true,
        validators: [Validators.required, this.validatedMovieStatus.bind(this)],
      }),
    });
    this.movieForm.push(addMoviesForm);

    this.movieCount = this.movieForm.length;
  }

  deleteMovie(movieIndex: number) {
    this.movieForm.removeAt(movieIndex);
    this.movieCount = this.movieForm.length;
  }

  resetMovie(movieIndex: number) {
    this.movieForm.reset(movieIndex);
  }

  deleteAllMovie() {
    this.movieForm.clear();
    this.movieCount = this.movieForm.length;
  }

  validDob(control: FormControl): ValidationErrors | null {
    let inputDate = new Date(control.value);
    let date = this.validDobDate;
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    if (inputDate >= date) {
      return { invalidDob: true };
    }
    return null;
  }

  validatedMovieStatus(control: FormControl): ValidationErrors | null {
    if (!SelectOptions[control.value]) {
      return { invalidStatusSelected: true };
    }
    return null;
  }

  validateMovieForm(): boolean {
    if (this.movieForm.valid) return true;
    return false;
  }

  validActorForm(): boolean {
    if (this.validateMovieForm()) {
      this.errorMessageMovie = '';
      if (this.addActorForm.valid) {
        this.errorMessage = '';
        return true;
      } else {
        this.errorMessage =
          'Please Fill All the Mandatory Field Marked with (*).';
        this.actorElement.nativeElement.ownerDocument
          .getElementById('actorErrorMessage')
          .scrollIntoView({ behavior: 'smooth' });
        return false;
      }
    } else {
      this.errorMessageMovie = 'Please Fill All The Movie Details';
      return false;
    }
  }

  resetActorForm() {
    this.addActorForm.reset();
  }

  onSubmitAddActor() {
    if (this.validActorForm()) {
      this.errorMessage = '';
      this.actor = new ActorModel(
        this.addActorForm.value.name,
        this.addActorForm.value.emailId,
        this.addActorForm.value.dob,
        this.addActorForm.value.mobile,
        this.addActorForm.value.fee,
        this.addActorForm.value.movieForm
      );
      console.log(this.actor);

      console.log(
        this.actorService.saveActorsDetailsService(this.actor).subscribe()
      );
      this.movieForm.clear();
      this.addActorForm.reset();
    }
  }
}
