import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:5000/data';
  private TOTAL_NUMBER_API_SERVER = 'http://localhost:5000/totalNumber';

  constructor(private httpClient: HttpClient) {}

  sendGetRequestPerson() {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  sendGetRequestNumber() {
    return this.httpClient.get(this.TOTAL_NUMBER_API_SERVER)
  };
}
