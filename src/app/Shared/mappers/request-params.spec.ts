import { RequestParamsMapper } from './request-params.mapper';
import { ParamRequestModel } from '../models/param.request.model';

describe('Given that the mapRequest is called,', () => {
  const { mapRequest } = RequestParamsMapper;
  describe('And array params have only one param', () => {

    it('Then the mapper return a string formated with one param', () => {
      const params = [new ParamRequestModel('sortBy', 'name')];
      expect(mapRequest(params)).toBe('?sortBy=name');
    });
  });

  describe('And array param have four parameters', () => {
    it('Then the mapper return a string formated with four param', () => {
      const params = [new ParamRequestModel('sortBy', 'name'),
                      new ParamRequestModel('order', 'desc'),
                      new ParamRequestModel('page', '1'),
                      new ParamRequestModel('limit', '9')];
      expect(mapRequest(params)).toBe('?sortBy=name&order=desc&page=1&limit=9');
    });
  });
});
