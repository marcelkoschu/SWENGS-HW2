import {Component, OnInit} from '@angular/core';
import {ShopService} from "../service/shop.service";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  shops: any[];
  displayedColumns = ['name', 'address', 'postal_code', 'sales_manager', 'employee_count', 'is_open', 'id'];
  temp = null;

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    this.shopService.getShops()
      .subscribe((response: any[]) => {
        this.shops = response;
      });
  }


  //Double click to confirm delete
  deleteShop(shop: any) {
    if (this.temp == null) {
      this.temp = shop.id;
      return;
    } else if (this.temp != shop.id) {
      this.temp = null;
      return;
    } else {
      this.shopService.deleteShop(shop)
        .subscribe(() => {
          this.ngOnInit();
        });
    }
  }
}










