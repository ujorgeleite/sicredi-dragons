import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DragonService } from '../../shared/services/dragon.service';
import { from } from 'rxjs';
import { DragonMapper } from 'src/app/shared/mappers/dragon.mapper';
import { ParamRequestModel } from 'src/app/shared/models/param.request.model';

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

    const params = [new ParamRequestModel('sortBy', 'name'),
    new ParamRequestModel('page', '1'),
    new ParamRequestModel('limit', '7')];
    this.dragonService.getAll(params)
      .subscribe((res) => this.dragons = res);
  }

}
