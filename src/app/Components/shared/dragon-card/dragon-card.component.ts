import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dragon-card',
  templateUrl: './dragon-card.component.html',
  styleUrls: ['./dragon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragonCardComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;

  constructor() { }

  ngOnInit() {
  }

}
