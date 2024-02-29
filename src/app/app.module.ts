import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AddActorComponent } from './component/Actor/add-actor/add-actor.component';
import { AddMovieComponent } from './component/movie/add-movie/add-movie.component';
import { SearchActorComponent } from './component/Actor/search-actor/search-actor.component';
import { UpdateMovieComponent } from './component/movie/update-movie/update-movie.component';
import { DeleteMovieComponent } from './component/movie/delete-movie/delete-movie.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import { ShowMoviesComponent } from './component/movie/show-movies/show-movies.component';
import { StringFormatter } from 'src/app/material/StringFormatter.pipe';
import { DeleteActorComponent } from './component/Actor/delete-actor/delete-actor.component';
import { ActorService } from './service/actor/actor-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddActorComponent,
    AddMovieComponent,
    SearchActorComponent,
    UpdateMovieComponent,
    DeleteMovieComponent,
    ShowMoviesComponent,
    StringFormatter,
    DeleteActorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
