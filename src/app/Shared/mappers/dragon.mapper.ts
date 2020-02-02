import { DragonResponseModel } from '../models/dragon.response.model';
import { DragonViewModel } from '../models/dragon.view.model';

export class DragonMapper {
  public static mapResponseToViewModel(dragonResponse: DragonResponseModel): DragonViewModel {
    return new DragonViewModel(
      dragonResponse.name,
      dragonResponse.type,
      dragonResponse.histories,
      dragonResponse.id);
  }
}
