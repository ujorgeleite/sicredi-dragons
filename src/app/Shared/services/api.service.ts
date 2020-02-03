import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DragonResponseModel } from '../models/dragon.response.model';
import { DragonRequestModel } from '../models/dragon.request.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/';
  }

  get(paramUrl: string): Observable<DragonResponseModel[]> {
    return this.httpClient.get<DragonResponseModel[]>(`${this.baseUrl}${paramUrl}`);
  }

  getById(paramUrl: string): Observable<DragonResponseModel> {
    return this.httpClient.get<DragonResponseModel>(`${this.baseUrl}${paramUrl}`);
  }

  delete(paramUrl: string): Observable<DragonResponseModel> {
    return this.httpClient.delete<DragonResponseModel>(`${this.baseUrl}${paramUrl}`);
  }

  put(paramUrl: string, dragon: DragonRequestModel): Observable<DragonResponseModel> {
    return this.httpClient.put<DragonResponseModel>(`${this.baseUrl}${paramUrl}`, dragon);
  }

  post(paramUrl: string, dragon: DragonRequestModel): Observable<DragonResponseModel> {
    return this.httpClient.post<DragonResponseModel>(`${this.baseUrl}${paramUrl}`, dragon);
  }
}
