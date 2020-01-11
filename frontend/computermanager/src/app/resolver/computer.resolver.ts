import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
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
