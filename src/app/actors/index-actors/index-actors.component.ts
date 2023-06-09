import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { actorDTO } from '../actor.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css'],
})
export class IndexActorsComponent implements OnInit {
  actors: actorDTO[] = [];
  columnsToDisplay = ['name', 'actions'];
  totalAmountOfRecords?: string;
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private actorsService: ActorsService) {}
  ngOnInit(): void {
    this.loadActors();
  }

  delete(id: number) {
    this.actorsService.delete(id).subscribe(() => {
      this.loadActors();
    });
  }

  private loadActors() {
    this.actorsService
      .get(this.currentPage, this.pageSize)
      .subscribe((response: HttpResponse<actorDTO[]>) => {
        this.actors = response.body!;
        this.totalAmountOfRecords = response.headers.get(
          'totalAmountOfRecords'
        )!;
      });
  }

  updatePagination(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadActors();
  }
}
