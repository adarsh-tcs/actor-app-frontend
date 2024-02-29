import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActorModel } from 'src/app/model/actorModel';
import { MovieModel } from 'src/app/model/movieModel';
import { ActorService } from 'src/app/service/actor/actor-service.service';

@Component({
  selector: 'app-search-actor',
  templateUrl: './search-actor.component.html',
  styleUrls: ['./search-actor.component.css'],
})
export class SearchActorComponent implements OnInit, DoCheck {
  searchActorForm!: FormGroup;
  actorNameList: string[] = [];
  movieList: MovieModel[] = [];
  actorDetails!: ActorModel;
  MovieTableTitle: string = 'Movie List';
  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.searchActorForm = new FormGroup({
      mobile: new FormControl(null, Validators.pattern('\\d{10}')),
      name: new FormControl(null),
    });

    this.actorService
      .fetchActorNameList()
      .subscribe((res) => this.handelActorList(res));
  }

  ngDoCheck(): void {
    if (this.actorDetails && this.actorDetails.name) {
      this.MovieTableTitle =
        this.actorDetails.name + ' Featured in Below Movies';
    } else {
      this.MovieTableTitle = 'Movie List';
    }
  }

  // handelActorList(resp: any) {
  //   if (resp.payload.length > 0) {
  //     this.actorNameList = resp.payload;
  //   } else {
  //     this.actorNameList = [];
  //   }
  // }

  handelActorList(resp: any) {
    if (resp.length > 0) {
      this.actorNameList = resp;
    } else {
      this.actorNameList = [];
    }
  }
  validateSearchForm(): { [key: string]: string } | null {
    if (
      this.searchActorForm.value.mobile != null &&
      this.searchActorForm.controls['mobile'].valid
    ) {
      return { mobile: this.searchActorForm.value.mobile.toString() };
    } else if (
      this.searchActorForm.value.name != null &&
      this.searchActorForm.value.name != ''
    ) {
      return { name: this.searchActorForm.value.name };
    }
    return null;
  }

  searchActorSubmit() {
    let requestBody = this.validateSearchForm();
    if (requestBody != null) {
      this.actorService
        .fetchMovieList(requestBody)
        .subscribe((res) => this.handelSearchActorSucess(res));
    } else {
      this.searchActorForm.reset();
      this.movieList = [];
      this.actorDetails = {} as ActorModel;
    }
  }

  handelSearchActorSucess(response: any) {
    if (response.payload != null) {
      this.actorDetails = response.payload;
      this.movieList = this.actorDetails.movieDto;
      console.log(this.actorDetails);
    }
  }
}
