import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ShopService} from '../service/shop.service';
import {VendorService} from '../service/vendor.service';

@Injectable({
  providedIn: 'root'
})
export class VendorOptionsResolver implements Resolve<Observable<any>> {
  constructor(private vendorService: VendorService) {
  }

  resolve() {
    return this.vendorService.retrieveVendorOptions();
  }
}
