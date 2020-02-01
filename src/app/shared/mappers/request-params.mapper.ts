import { ParamRequestModel } from '../models/param.request.model';

export class RequestParamsMapper {

  public static mapRequest(params: ParamRequestModel[]): string {
    const queryString = params.reduce((acc, curr) => {
      const concatenate = params[params.length - 1].param === curr.param ? '' : '&';
      const parameter = `${curr.param}=${curr.value}${concatenate}`;
      return acc += parameter;
    }, '');

    return `?${queryString}`;
  }
}
