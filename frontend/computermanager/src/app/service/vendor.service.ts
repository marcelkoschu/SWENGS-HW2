import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  vendorNames = [];

  constructor(private http: HttpClient) {
   //this.retrieveVendorOptions().forEach(value => this.vendorNames.append(value[0].name));
  }

  retrieveVendorOptions() {
    return this.http.get <any[]>('/api/vendor/options');
  }

}
