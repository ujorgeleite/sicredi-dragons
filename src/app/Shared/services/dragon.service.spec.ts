import { TestBed } from '@angular/core/testing';

import { DragonService } from './dragon.service';
import { ApiService } from './api.service';
import {  of } from 'rxjs';
import { DragonResponseModel } from '../models/dragon.response.model';
import { DragonViewModel } from '../models/dragon.view.model';

describe('DragonService', () => {
  let apiService;
  let service;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        DragonService,
        { provide: ApiService, useValue: { get: {}, getById: {}, delete: {} } },

      ]
    });

    apiService = testBed.get(ApiService);
    service = TestBed.get(DragonService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('Given that the method getAll is called', () => {
    it('Then the get method should be called', () => {
      spyOn(apiService, 'get').and.callFake(() => of({}));
      service.getAll();
      expect(apiService.get).toHaveBeenCalled();
    });

    it('Then the get method should be called with /dragon param', () => {
      spyOn(apiService, 'get').and.callFake(() => of({}));
      service.getAll();
      expect(apiService.get).toHaveBeenCalledWith('dragon');
    });

    it('Then the get method should be called one time', () => {
      spyOn(apiService, 'get').and.callFake(() => of({}));
      service.getAll();
      expect(apiService.get).toHaveBeenCalledTimes(1);
    });

    it('Then the get method should be return a list of observables', async () => {
      const date = new Date();
      const dragonsResponse: DragonResponseModel[] = [
        new DragonResponseModel('123', date, 'Djambudo', 'Small Dragon', [])
      ];

      const dragonsViewModel: DragonViewModel[] = [
        new DragonViewModel('Djambudo', 'Small Dragon', date, [], '123')
      ];

      spyOn(apiService, 'get').and.callFake(() => of(dragonsResponse));
      const returnedValue = await service.getAll().toPromise();
      expect(returnedValue).toEqual(dragonsViewModel);
    });
  });


  describe('Given that the method delete is called', () => {
    it('Then the delete method should be called', () => {
      spyOn(apiService, 'delete').and.callFake(() => of({}));
      service.delete('2');
      expect(apiService.delete).toHaveBeenCalled();
    });

    it('Then the get method should be called with id param', () => {
      spyOn(apiService, 'delete').and.callFake(() => of({}));
      service.delete('2');
      expect(apiService.delete).toHaveBeenCalledWith('dragon/2');
    });

    it('Then the get method should be called one time', () => {
      spyOn(apiService, 'delete').and.callFake(() => of({}));
      service.delete('2');
      expect(apiService.delete).toHaveBeenCalledTimes(1);
    });
  });

  describe('Given that the method getById is called with id param', () => {
    it('Then the getById method should be called', () => {
      spyOn(apiService, 'getById').and.callFake(() => of({}));
      service.getById('2');
      expect(apiService.getById).toHaveBeenCalled();
    });

    it('Then the getById method should be called with id param', () => {
      spyOn(apiService, 'getById').and.callFake(() => of({}));
      service.getById('2');
      expect(apiService.getById).toHaveBeenCalledWith('dragon/2');
    });

    it('Then the getById method should be called one time', () => {
      spyOn(apiService, 'getById').and.callFake(() => of({}));
      service.getById('2');
      expect(apiService.getById).toHaveBeenCalledTimes(1);
    });

    it('Then the getById method should be return a list of observables', async () => {
      const date = new Date();
      const dragonsResponse: DragonResponseModel =
        new DragonResponseModel('123', date, 'Djambudo', 'Small Dragon', []);

      const dragonsViewModel: DragonViewModel =
        new DragonViewModel('Djambudo', 'Small Dragon', date, [], '123');
      spyOn(apiService, 'getById').and.callFake(() => of(dragonsResponse));
      const returnedValue = await service.getById().toPromise();
      expect(returnedValue).toEqual(dragonsViewModel);
    });
  });
});
