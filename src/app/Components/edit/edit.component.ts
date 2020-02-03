import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EditForm } from './edit.form';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { DragonViewModel } from 'src/app/Shared/models/dragon.view.model';
import { DragonService } from 'src/app/Shared/services/dragon.service';
import { DragonResponseModel } from 'src/app/Shared/models/dragon.response.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  private id: string;
  formEditGroup: FormGroup;


  constructor(private editForm: EditForm,
              private route: ActivatedRoute,
              private dragonService: DragonService,
              private toastService: ToastrService,
              private changeDetectorRef: ChangeDetectorRef, ) {

    this.formEditGroup = this.editForm.createForm();
    this.mapDragon();
  }

  ngOnInit() {
  }

  mapDragon(): void {
    this.route.paramMap
      .pipe(switchMap(params => {
        this.id = String(params.get('id'));
        return this.dragonService.getById(this.id);
      }))
      .subscribe(res => {
        this.setForm(res);
        this.changeDetectorRef.detectChanges();
      });
  }

  setForm(dragon: DragonViewModel): void {
    this.formEditGroup.controls.name.setValue(dragon.name);
    this.formEditGroup.controls.type.setValue(dragon.type);
    this.formEditGroup.controls.histories.setValue(dragon.histories);
  }

  save(): void {
    const dragon = Object.assign(this.formEditGroup.getRawValue());
    this.dragonService.put(this.id, dragon)
      .subscribe(res => {
        this.toastService.toastrConfig.positionClass = 'toast-bottom-full-width';
        this.toastService.show(`Os dados do ${res.name} foram gravados com sucesso.`, 'Sucesso');
      });

  }



  formIsValid(): boolean {
    return this.formEditGroup.valid;
  }

}
