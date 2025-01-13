import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APISService {

  constructor(private http: HttpClient) { }
  apiUrl="http://localhost:3000/test"
  send(){
    return this.http.get(this.apiUrl)
  }
}
