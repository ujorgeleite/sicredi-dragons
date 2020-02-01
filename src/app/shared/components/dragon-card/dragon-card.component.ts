import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DragonViewModel } from '../../models/dragon.view.model';

@Component({
  selector: 'app-dragon-card',
  templateUrl: './dragon-card.component.html',
  styleUrls: ['./dragon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragonCardComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;

  @Input() dragon: DragonViewModel;

  constructor() {}

  ngOnInit() {
  }

}
