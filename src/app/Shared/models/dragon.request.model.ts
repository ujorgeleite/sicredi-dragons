export class DragonRequestModel {

  constructor(public name: string,
              public type: string,
              public histories: string[] = [],
              public id?: string) {  }
}
