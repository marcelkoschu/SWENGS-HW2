import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ShopService} from "../service/shop.service";

@Injectable({
  providedIn: 'root'
})
export class ShopResolver implements Resolve<Observable<any>> {
  constructor(private shopService: ShopService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.shopService.getShop(route.paramMap.get('id'));
  }
}
