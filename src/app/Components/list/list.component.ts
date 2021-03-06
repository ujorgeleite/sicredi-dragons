import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import { DragonService } from '../../Shared/services/dragon.service';
import { ParamRequestModel } from 'src/app/Shared/models/param.request.model';
import { DragonRequestModel } from 'src/app/Shared/models/dragon.request.model';
import { ToastrService } from 'ngx-toastr';
import { repeat } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  dragons = [];

  constructor(private dragonService: DragonService,
              private toastService: ToastrService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.reloadDragons();
  }

  reloadDragons(event?: any) {
    const params = [new ParamRequestModel('sortBy', 'name'),
    new ParamRequestModel('page', '1'),
    new ParamRequestModel('limit', '6')];

    this.dragonService.getAll(params)
      .subscribe((res) => {
        this.dragons = res;
        this.changeDetectorRef.detectChanges();
      });

  }

  add() {
    const dragon = new DragonRequestModel('Dragon', 'Challenger');
    this.dragonService.post(dragon)
      .pipe(repeat(6))
      .subscribe(() => {
        this.toastService.show(`Dragão ${dragon.name} adicionado com sucesso`, 'Aviso');
        this.reloadDragons();
      });
  }

}
