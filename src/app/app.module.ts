import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';

import { MarkdownModule } from 'ngx-markdown';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { AppComponent } from './app.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { CreateTheaterComponent } from './movie-theaters/create-theater/create-theater.component';
import { EditTheaterComponent } from './movie-theaters/edit-theater/edit-theater.component';
import { IndexTheatersComponent } from './movie-theaters/index-theaters/index-theaters.component';
import { MovieTheaterFormComponent } from './movie-theaters/movie-theater-form/movie-theater-form.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { MapComponent } from './utilities/map/map.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { FormMovieComponent } from './movies/form-movie/form-movie.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';
import { ActorsAutocompleteComponent } from './actors/actors-autocomplete/actors-autocomplete.component';
import { AppConfigService } from './utilities/app-config.service';
import { DisplayErrorsComponent } from './utilities/display-errors/display-errors.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { AuthorizeViewComponent } from './security/authorize-view/authorize-view.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { AuthenticationFormComponent } from './security/authentication-form/authentication-form.component';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};
@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexActorsComponent,
    CreateActorComponent,
    IndexTheatersComponent,
    CreateTheaterComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditGenreComponent,
    EditTheaterComponent,
    EditMovieComponent,
    FormGenreComponent,
    MovieFilterComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent,
    MovieTheaterFormComponent,
    MapComponent,
    FormMovieComponent,
    MultipleSelectorComponent,
    ActorsAutocompleteComponent,
    DisplayErrorsComponent,
    MovieDetailsComponent,
    AuthorizeViewComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MarkdownModule.forRoot(),
    LeafletModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
