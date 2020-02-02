export class DragonViewModel {
  constructor(public name?: string,
              public type?: string,
              public createdDate?: Date,
              public histories: string[] = [],
              public id?: string, ) {

  }
}
