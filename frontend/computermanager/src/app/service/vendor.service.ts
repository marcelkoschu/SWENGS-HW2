import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  vendorNames;

  constructor(private http: HttpClient) {
    this.vendorNames = this.retrieveVendorOptions().subscribe();
  }

  retrieveVendorOptions() {
    return this.http.get <any[]>('/api/vendor/options');
  }
}
