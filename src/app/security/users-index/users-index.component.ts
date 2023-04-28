import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { editRoleDTO, userDTO } from '../security.models';
import { SecurityService } from '../security.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css'],
})
export class UsersIndexComponent implements OnInit {
  constructor(private securityService: SecurityService) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allFruits.slice()
      )
    );
  }

  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  allFruits: string[] = ['Admin', 'User', 'Read-Only'];
  users: userDTO[] = [];
  page: number = 1;
  pageSize: number = 10;
  totalAmountOfRecords?: string;
  columnsToDisplay = ['email', 'roles', 'actions'];

  ngOnInit(): void {
    this.securityService
      .getUsers(this.page, this.pageSize)
      .subscribe((httpResponse: HttpResponse<userDTO[]>) => {
        this.users = httpResponse.body!;
        this.totalAmountOfRecords = httpResponse.headers.get(
          'totalAmountOfRecords'
        )!;
      });
  }

  remove(element: userDTO, role: string): void {
    let editRole: editRoleDTO = { userId: element.userId, roleName: role };

    this.securityService.removeRole(editRole).subscribe(() => {
      window.location.reload();
    });
  }

  fruits: string[] = [];

  selected(event: MatAutocompleteSelectedEvent, element: userDTO): void {
    let editRole: editRoleDTO = {
      userId: element.userId,
      roleName: event.option.value,
    };

     Swal.fire({
       title: `Are you sure want to add role: ${editRole.roleName}?`,
      //  text: 'You will not be able to recover this file!',
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: 'Yes, add role!',
       cancelButtonText: 'No',
     }).then((result) => {
       if (result.value) {
         this.securityService.assignRole(editRole).subscribe(() => {
           window.location.reload();
         });
         //  Swal.fire(
         //    'Role Added!',
         //    'Your imaginary file has been deleted.',
         //    'success'
         //  );
       } else if (result.dismiss === Swal.DismissReason.cancel) {
         Swal.fire('Cancelled', 'Operation cancelled', 'info');
       }
     }); 
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter((fruit) =>
      fruit.toLowerCase().includes(filterValue)
    );
  }

  // makeAdmin(userId: string) {
  //   this.securityService.makeAdmin(userId).subscribe(() => {
  //     Swal.fire('Success', 'The operation was successful', 'success');
  //   });
  // }

  // removeAdmin(userId: string) {
  //   this.securityService.removeAdmin(userId).subscribe(() => {
  //     Swal.fire('Success', 'The operation was successful', 'success');
  //   });
  // }
}
