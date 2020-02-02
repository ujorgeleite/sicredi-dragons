import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragonDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
