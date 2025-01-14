import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APISService {

  constructor(private http: HttpClient) { }
  public userId: string | null = null;
  apiUrl="http://localhost:3000/user"
  addUsers(data:any){

    return this.http.post(this.apiUrl,data)
  }
  getUsers(){
    return this.http.get (this.apiUrl)
  }
  getUserById(){
    return this.http.get (`${this.apiUrl}?id=${this.userId}`)
  }
  updateUser(data:any){
    return this.http.put(`${this.apiUrl}?id=${this.userId}`,data)
  }

}
