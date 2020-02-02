import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { of } from 'rxjs';

describe('Api Service', () => {

  let httpClient;
  let service;
  const baseUrl = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/';

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        ApiService,
        { provide: HttpClient, useValue: { get: {}, delete: {} } },

      ]
    });

    httpClient = testBed.get(HttpClient);
    service = TestBed.get(ApiService);
  });
  describe('Given that the method get is called ', () => {
    it('Then the method http get should be called', () => {
      spyOn(httpClient, 'get').and.callFake(() => of({}));
      service.get('dragon');
      expect(httpClient.get).toHaveBeenCalled();
    });

    it('Then the method http get should be called with params', () => {
      spyOn(httpClient, 'get').and.callFake(() => of({}));
      service.get('dragon');
      expect(httpClient.get).toHaveBeenCalledWith(`${baseUrl}dragon`);
    });

    it('Then the method http get should be called one time', () => {
      spyOn(httpClient, 'get').and.callFake(() => of({}));
      service.get('dragon');
      expect(httpClient.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('Given that the method getById is called', () => {
    it('Then the method http get should be called', () => {
      spyOn(httpClient, 'get').and.callFake(() => of({}));
      service.getById('dragon/2');
      expect(httpClient.get).toHaveBeenCalled();
    });

    it('Then the method http get should be called with params', () => {
      spyOn(httpClient, 'get').and.callFake(() => of({}));
      service.getById('dragon/2');
      expect(httpClient.get).toHaveBeenCalledWith(`${baseUrl}dragon/2`);
    });

    it('Then the method http get should be called one time', () => {
      spyOn(httpClient, 'get').and.callFake(() => of({}));
      service.getById('dragon/2');
      expect(httpClient.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('Given that the method delete is called', () => {
    it('Then the method http delete should be called', () => {
      spyOn(httpClient, 'delete').and.callFake(() => of({}));
      service.delete('dragon/2');
      expect(httpClient.delete).toHaveBeenCalled();
    });

    it('Then the method http delete should be called with params', () => {
      spyOn(httpClient, 'delete').and.callFake(() => of({}));
      service.delete('dragon/2');
      expect(httpClient.delete).toHaveBeenCalledWith(`${baseUrl}dragon/2`);
    });

    it('Then the method http delete should be called one time', () => {
      spyOn(httpClient, 'delete').and.callFake(() => of({}));
      service.delete('dragon/2');
      expect(httpClient.delete).toHaveBeenCalledTimes(1);
    });
  });
});
