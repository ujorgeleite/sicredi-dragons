import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/Shared/services/api.service';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DragonMapper } from 'src/app/Shared/mappers/dragon.mapper';
import { DragonViewModel } from 'src/app/Shared/models/dragon.view.model';
import { ParamRequestModel } from '../models/param.request.model';
import { RequestParamsMapper } from '../mappers/request-params.mapper';
import { DragonResponseModel } from '../models/dragon.response.model';
import { DragonRequestModel } from '../models/dragon.request.model';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(private apiService: ApiService) {
  }


  getAll(params?: ParamRequestModel[]): Observable<DragonViewModel[]> {
    const { mapRequest } = RequestParamsMapper;
    const url = `dragon${mapRequest(params)}`;
    return from(this.apiService.get(url))
      .pipe(
        map(dragonsResponse =>
          dragonsResponse.map(dragonResponse => DragonMapper.mapResponseToViewModel(dragonResponse))));
  }


  getById(id: string): Observable<DragonViewModel> {
    const url = `dragon/${id}`;
    return from(this.apiService.getById(url))
      .pipe(map(dragonsResponse => DragonMapper.mapResponseToViewModel(dragonsResponse)));
  }

  put(id: string, dragon: DragonRequestModel): Observable<DragonResponseModel> {
    const url = `dragon/${id}`;
    return from(this.apiService.put(url, dragon));
  }


  delete(id: string) {
    const url = `dragon/${id}`;
    return from(this.apiService.delete(url));
  }

  post(dragon: DragonRequestModel): Observable<DragonResponseModel> {
    const url = `dragon/`;
    return from(this.apiService.post(url, dragon));
  }
}


