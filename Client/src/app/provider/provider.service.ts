import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  path: string;

  constructor(private http: HttpClient) {
    this.path = 'http://localhost:8080';
  }

  getFile(): Observable<any> {
    return this.http.get(this.path + '/experience');
  }

}
