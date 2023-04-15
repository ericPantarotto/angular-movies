import { Component, OnInit } from '@angular/core';
import { AppConfigService } from 'src/app/utilities/app-config.service';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css'],
})
export class IndexGenresComponent implements OnInit {
  constructor(
    private genreService: GenresService,
    private environment: AppConfigService
  ) {
    console.log(environment.config);
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe((genres) => {
      console.log(genres);
    });
  }
}
