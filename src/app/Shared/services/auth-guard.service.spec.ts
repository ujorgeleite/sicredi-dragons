import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';

describe('AuthGuardService', () => {
  let router;
  let service;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        AuthGuardService,
        { provide: Router, useValue: { navigate: {} } },
      ]
    });
    service = TestBed.get(AuthGuardService);
    router = TestBed.get(Router);
  });

  describe('Given that the method canActivate is called', () => {
    describe('and the user is authenticatd ', () => {
      it('Then the return should be true', () => {
        spyOn(router, 'navigate').and.callFake(() => { });
        service.authenticate(new UserModel('dragon', 'sicredi'));
        expect(service.canActivate()).toBeTruthy();
      });

      it('Then the method router navigate should be called', () => {
        spyOn(router, 'navigate').and.callFake(() => { });
        service.authenticate(new UserModel('dragon', 'sicredi'));
        expect(router.navigate).toHaveBeenCalled();
      });
    });

    describe('and the user isn\'t authenticatd ', () => {
      it('Then the return should be false', () => {
        spyOn(router, 'navigate').and.callFake(() => { });
        expect(service.canActivate()).toBeFalsy();
      });

      it('Then the method router navigate should be called', () => {
        spyOn(router, 'navigate').and.callFake(() => { });
        service.canActivate();
        expect(router.navigate).toHaveBeenCalled();
      });
    });
  });
});
