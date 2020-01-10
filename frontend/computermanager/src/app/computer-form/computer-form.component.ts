import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ComputerService} from '../service/computer.service';
import {ShopService} from '../service/shop.service';
import {VendorService} from '../service/vendor.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
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
      'storage': ['', [Validators.max(300)]],
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

  badWordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /bad word/.test(control.value);
      return forbidden ? {'badWord': {value: control.value}} : null;
    };
  }

  titleValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.computerService.getComputers()
        .pipe(
          map((movies: any[]) => {
            const currentId = this.computerFormGroup.controls.id.value;
            const currenModel = this.computerFormGroup.controls.model.value;
            const cmpWithSameModel = movies.find((m) => {
              return (currentId || m.id !== currentId) && m.model === currenModel
            });
            if (cmpWithSameModel) {
              return {
                titleAlreadyExists: true
              };
            } else {
              return null;
            }
          })
        );
    }
  }

}
