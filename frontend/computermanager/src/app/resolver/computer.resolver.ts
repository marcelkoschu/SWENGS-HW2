import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ShopService} from '../service/shop.service';
import {VendorService} from '../service/vendor.service';
import {ComputerService} from '../service/computer.service';

@Injectable({
  providedIn: 'root'
})
export class ComputerResolver implements Resolve<Observable<any>> {
  constructor(private computerService: ComputerService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.computerService.getComputer(route.paramMap.get('id'));
  }
}
