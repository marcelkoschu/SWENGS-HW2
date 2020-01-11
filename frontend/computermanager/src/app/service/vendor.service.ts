import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {


  constructor(private http: HttpClient) {
  }

  retrieveVendorOptions() {
    return this.http.get <any[]>('/api/vendor/options');
  }

}
