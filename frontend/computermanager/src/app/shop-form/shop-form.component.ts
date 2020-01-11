import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ShopService} from '../service/shop.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.scss']
})
export class ShopFormComponent implements OnInit {

  shopFormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private userService: UserService, private shopService: ShopService) {
  }

  ngOnInit() {

    const data = this.route.snapshot.data;
    this.shopFormGroup = this.fb.group({
      'id': [null],
      'name': ['', [Validators.required]],
      'address': [null, [Validators.required]],
      'postal_code': ['', [Validators.required, Validators.min(1000), Validators.max(9999)]],
      'sales_manager': ['', [Validators.required]],
      'employee_count': ['', Validators.required],
      'is_open': [false],
    });

    if (data.shop) {
      this.shopFormGroup.patchValue(data.shop);
    }
  }


  createShop() {
    const shop = this.shopFormGroup.value;
    if (shop.id) {
      this.shopService.updateShop(shop)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.shopService.createShop(shop)
        .subscribe((response: any) => {
          this.router.navigate(['/shop-form/' + response.id]);
        });
    }
  }

}
