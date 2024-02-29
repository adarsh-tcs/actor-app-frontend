import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActorComponent } from './component/Actor/add-actor/add-actor.component';
import { UpdateMovieComponent } from './component/movie/update-movie/update-movie.component';
import { DeleteMovieComponent } from './component/movie/delete-movie/delete-movie.component';
import { SearchActorComponent } from './component/Actor/search-actor/search-actor.component';
import { DeleteActorComponent } from './component/Actor/delete-actor/delete-actor.component';

const routes: Routes = [
  { path: 'add-actor', component: AddActorComponent },
  { path: '', component: AddActorComponent },
  { path: 'search-actor', component: SearchActorComponent },
  { path: 'update-movie', component: UpdateMovieComponent },
  { path: 'delete-actor', component: DeleteActorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
