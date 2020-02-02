export class DragonResponseModel {

  constructor(public id: string,
              public createdAt: Date,
              public name: string,
              public type: string,
              public histories: string[] = []) {

  }
}
