import { TestBed } from '@angular/core/testing';

import { DragonService } from './dragon.service';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';

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
});
