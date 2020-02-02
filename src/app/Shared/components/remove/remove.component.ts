import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DragonService } from '../../services/dragon.service';


@Component({
  selector: 'app-remove-dragon',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {

  @Input() dragonId: string;
  @Input() dragonName: string;
  @Output() reloader: EventEmitter<any> = new EventEmitter();


  constructor(private dragonService: DragonService) {
  }

  ngOnInit() {
  }

  public deleteDragon(event, id: string) {
    this.dragonService.delete(id)
      .subscribe((res) => {
        this.reloader.emit(null);
      });
  }

}
