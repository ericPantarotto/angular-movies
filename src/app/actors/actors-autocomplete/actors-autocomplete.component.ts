import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { actorsMovieDTO } from '../actor.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css'],
})
export class ActorsAutocompleteComponent implements OnInit {
  constructor(private actorsService: ActorsService) {}

  control: FormControl = new FormControl();

  @Input()
  selectedActors: actorsMovieDTO[] = [];

  actorsToDisplay: actorsMovieDTO[] = [];

  columnsToDisplay = ['picture', 'name', 'character', 'actions'];

  @ViewChild(MatTable) table?: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value: string) => {
      this.actorsService.searchByName(value).subscribe((response) => {
        this.actorsToDisplay = response.body;
      });
    });

    // for (let index = 0; index < this.actorsArray.length; index++) {
    //   let actor = this.actors[this.actorsArray[index] - 1];
    //   this.selectedActors.push({
    //     name: actor.name,
    //     picture: actor.picture,
    //     character: `Character ${index + 1}`,
    //   });
    // }
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    // console.log(event.option.value);
    this.control.patchValue('');

    //NOTE: actor already selected
    if (
      this.selectedActors.findIndex((x) => x.id == event.option.value.id) !== -1
    ) {
      return;
    }

    this.selectedActors.push(event.option.value);
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  remove(actor: any) {
    const index = this.selectedActors.findIndex((a) => a.name === actor.name);
    this.selectedActors.splice(index, 1);
    this.table?.renderRows();
  }

  dropped(event: CdkDragDrop<any[]>) {
    const previousIndex = this.selectedActors.findIndex(
      (actor) => actor === event.item.data
    );
    moveItemInArray(this.selectedActors, previousIndex, event.currentIndex);
    this.table?.renderRows();
  }
}
