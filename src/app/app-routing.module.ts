import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexTheatersComponent } from './movie-theaters/index-theaters/index-theaters.component';
import { CreateTheaterComponent } from './movie-theaters/create-theater/create-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'genres', component: IndexGenresComponent },
  { path: 'genres/create', component: CreateGenreComponent },

  { path: 'actors', component: IndexActorsComponent },
  { path: 'actors/create', component: CreateActorComponent },

  { path: 'movietheaters', component: IndexTheatersComponent },
  { path: 'movietheaters/create', component: CreateTheaterComponent },

  { path: 'movies/create', component: CreateMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
