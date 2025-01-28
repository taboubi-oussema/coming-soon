import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class APISService {
  constructor(private http: HttpClient) {}
  public userId: string | null = null;
  apiUrl = 'http://localhost:3000/user';
  apiJob = 'http://localhost:3000/job';
  addUsers(data: any) {
    return this.http.post(this.apiUrl, data);
  }
  getUsers() {
    return this.http.get(this.apiUrl);
  }
  getUserById() {
    return this.http.get(`${this.apiUrl}?id=${this.userId}`);
  }
  updateUser(data: any) {
    return this.http.put(`${this.apiUrl}?id=${this.userId}`, data);
  }
  deletUser(id: number) {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
  addJob(data: any) {
    return this.http.post(this.apiJob, data);
  }
  getJob() {
    return this.http.get(this.apiJob);
  }
  deletJob(id:number) {
    return this.http.delete(`${this.apiJob}?id=${id}`)
  }
}
