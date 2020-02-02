import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DragonViewModel } from '../../models/dragon.view.model';
import { DragonService } from '../../services/dragon.service';

@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragonDetailComponent implements OnInit {

  dragon: DragonViewModel;

  constructor(private dragonService: DragonService,
              private route: ActivatedRoute,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap(params => {
        const id = String(params.get('id'));
        return this.dragonService.getById(id);
      }))
      .subscribe(res => {
        this.dragon = res;
        this.changeDetectorRef.detectChanges();
      });

  }

}
