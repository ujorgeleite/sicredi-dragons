import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DragonService } from '../../Shared/services/dragon.service';
import { from } from 'rxjs';
import { DragonMapper } from 'src/app/Shared/mappers/dragon.mapper';
import { ParamRequestModel } from 'src/app/Shared/models/param.request.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  dragons = [];

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.reloadDragons();
  }

  reloadDragons(event?: any) {
    const params = [new ParamRequestModel('sortBy', 'name'),
    new ParamRequestModel('page', '1'),
    new ParamRequestModel('limit', '7')];
    this.dragonService.getAll(params)
      .subscribe((res) => this.dragons = res);

  }

}
