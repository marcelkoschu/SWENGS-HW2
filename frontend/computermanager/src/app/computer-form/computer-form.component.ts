import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ComputerService} from '../service/computer.service';
import {VendorService} from '../service/vendor.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-computer-form',
  templateUrl: './computer-form.component.html',
  styleUrls: ['./computer-form.component.scss']
})
export class ComputerFormComponent implements OnInit {

  computerFormGroup;
  vendorOptions;
  shopOptions;
  //List of badwords
  badWords = ['shit', 'fuck', 'ass']

  constructor(private fb: FormBuilder, private computerService: ComputerService, private route: ActivatedRoute,
              private router: Router, private userService: UserService, private vendorService: VendorService) {
  }

  ngOnInit() {

    const data = this.route.snapshot.data;
    this.vendorOptions = data.vendorOptions;
    this.shopOptions = data.shopOptions;

    this.computerFormGroup = this.fb.group({
      'id': [null],
      'model': ['', [Validators.required]],
      'release_date': [null, [Validators.required]],
      'description': ['', [Validators.required, this.badWordValidator()]],
      'storage': ['', [Validators.max(99999)]],
      'isEnterpriseModel': [false],
      'vendor': [null],
      'sold_at': [[]],
    });

    if (data.computer) {
      this.computerFormGroup.patchValue(data.computer);
    }
  }


  createComputer() {
    const cmp = this.computerFormGroup.value;
    if (cmp.id) {
      this.computerService.updateComputer(cmp)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.computerService.createComputer(cmp)
        .subscribe((response: any) => {
          this.router.navigate(['/computer-form/' + response.id]);
        });
    }
  }

  //checks if the description is a badword
  badWordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let temp = false;
      this.badWords.forEach(
        current => {if (control.value == current) {temp = true;} }
      )
      return temp ? {'badWord': {value: control.value}} : null;
    };
  }


}
