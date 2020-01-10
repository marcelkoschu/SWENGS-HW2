import {Component, OnInit} from '@angular/core';
import {ComputerService} from '../service/computer.service';
import {Observable} from 'rxjs';
import {UserService} from '../service/user.service';
import {VendorService} from "../service/vendor.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import '../../icons';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.scss']
})
export class ComputerListComponent implements OnInit {

  computers: any[];
  displayedColumns = ['vendor','model', 'description', 'storage', 'id'];

  constructor(private computerService: ComputerService,  public userService: UserService, private vendorService: VendorService) {
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
