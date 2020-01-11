import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) {
  }

  retrieveShopOptions() {
    return this.http.get <any[]>('/api/shop/options');
  }

  getShops() {
    return this.http.get('/api/shop/list');
  }

  createShop(shop) {
    return this.http.post('/api/shop/create', shop);
  }

  updateShop(shop) {
    return this.http.put('/api/shop/' + shop.id + '/update', shop);
  }

  getShop(id) {
    return this.http.get('/api/shop/' + id + '/get');
  }

  deleteShop(shop) {
    return this.http.delete('/api/shop/' + shop.id + '/delete');
  }

}
