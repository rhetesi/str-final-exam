import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  // Filter
  phrase: string = '';
  filterKey: string = 'name';

  // Sorter
  columnHead: string = '';
  direction: boolean = false;
  sortColumn: string = '';
  sortDirect: string = 'asc';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(user: User) {
    this.userService.remove(user);
  }


  currentHead: string = 'id';

  onColumnSelect(columnHead: string): void{
    this.sortColumn = columnHead;
    if (columnHead !== this.currentHead) {
      this.sortDirect = 'asc'
    }

    if (columnHead == this.currentHead) {
      this.sortDirect == 'asc' ?
      this.sortDirect = 'dsc' :
        this.sortDirect = 'asc';
    }
    this.currentHead = columnHead;
    }


}
