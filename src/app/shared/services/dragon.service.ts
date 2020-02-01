import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DragonMapper } from 'src/app/shared/mappers/dragon.mapper';
import { DragonViewModel } from 'src/app/shared/models/dragon.view.model';
import { ParamRequestModel } from '../models/param.request.model';
import { RequestParamsMapper } from '../mappers/request-params.mapper';

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
}


