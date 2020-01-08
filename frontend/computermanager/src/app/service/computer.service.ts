import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  constructor(private http: HttpClient) {
  }

  getComputers() {
    return this.http.get('/api/computer/list');
  }

  createComputer(computer) {
    return this.http.post('/api/computer/create', computer);
  }

  updateComputer(computer) {
    return this.http.put('/api/computer/' + computer.id + '/update', computer);
  }

  getComputer(id) {
    return this.http.get('/api/computer/' + id + '/get');
  }

  deleteComputer(computer) {
    return this.http.delete('/api/computer/' + computer.id + '/delete');
  }
}
