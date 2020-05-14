import { Component, OnInit, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class DialogFormDataService {
  constructor() { }
  dialogData: DialogInputData;
}

@Injectable()
export class DialogFormResponseService {
  private dialogResponseSubject = new Subject<DialogResponse>();
  dialogResponse$ = this.dialogResponseSubject.asObservable();
  sendResponse(name: string, favouriteFood: string) {
    this.dialogResponseSubject.next({
      name,
      favouriteFood
    });
  }

  cancel() {
    this.dialogResponseSubject.next(null);
  }
}

export interface DialogInputData {
  name: string;
}

export interface DialogResponse {
  name: string;
  favouriteFood: string;
}

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {

  constructor(
    private dialogFormDataService: DialogFormDataService,
    private dialogFormResponseService: DialogFormResponseService) { }


  dialogData = this.dialogFormDataService.dialogData as DialogInputData;
  dialogForm: FormGroup;

  ngOnInit(): void {
    this.dialogForm = new FormGroup({
      faveFood: new FormControl()
    });
  }

  submitDialogForm() {
    if (this.dialogForm.controls.faveFood.value && this.dialogForm.controls.faveFood.value !== '') {
      this.dialogFormResponseService.sendResponse(this.dialogData.name, this.dialogForm.controls.faveFood.value);
    } else {
      alert('Please tell us your favourite food!');
    }
  }

  cancelDialogForm() {
    this.dialogFormResponseService.cancel();
  }

}
