import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ShopService} from '../service/shop.service';

@Injectable({
  providedIn: 'root'
})
export class ShopOptionsResolver implements Resolve<Observable<any>> {
  constructor(private shopService: ShopService) {
  }

  resolve() {
    return this.shopService.retrieveShopOptions();
  }
}
