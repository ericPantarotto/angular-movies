import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../actors.service';
import { actorDTO } from '../actor.model';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css'],
})
export class IndexActorsComponent implements OnInit {
  actors: actorDTO[] = [];
  columnsToDisplay = ['name', 'actions'];

  constructor(private actorsService: ActorsService) {}
  ngOnInit(): void {
    this.loadActors();
  }

  delete(id: number) {
  }
  
  private loadActors() {
    this.actorsService.get().subscribe((actors) => {
      this.actors = actors;
    });
  }
}
