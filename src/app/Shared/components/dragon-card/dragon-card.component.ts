import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() reloaderDragons: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  reloader($event) {
    this.reloaderDragons.emit(null);
  }

}
