import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DragonService } from '../../services/dragon.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-remove-dragon',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {

  @Input() dragonId: string;
  @Input() dragonName: string;
  @Output() reloader: EventEmitter<any> = new EventEmitter();


  constructor(private dragonService: DragonService,
              private toastService: ToastrService) {
  }

  ngOnInit() {
  }

  public deleteDragon(event, id: string) {
    this.dragonService.delete(id)
      .subscribe((res) => {
        this.toastService.show(`Dragão ${res.name} excluido com sucesso`, 'Aviso');
        this.reloader.emit(null);
      });
  }

}
