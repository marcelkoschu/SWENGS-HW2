import {Component, OnInit} from '@angular/core';
import {ComputerService} from '../service/computer.service';
import {Observable} from 'rxjs';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.scss']
})
export class ComputerListComponent implements OnInit {

  computers: any[];
  displayedColumns = ['model', 'description', 'vendor', 'id'];

  constructor(private computerService: ComputerService,  public userService: UserService) {
  }

  ngOnInit() {
    this.computerService.getComputers()
      .subscribe((response: any[]) => {
        this.computers = response;
      });
  }

  deleteComputer(cmp: any) {
    this.computerService.deleteComputer(cmp)
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
