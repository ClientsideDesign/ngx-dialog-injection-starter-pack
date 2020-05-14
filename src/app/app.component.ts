import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogWrapperComponent, DialogData } from './dialog-wrapper/dialog-wrapper.component';
import {
  DialogFormComponent,
  DialogFormDataService,
  DialogInputData,
  DialogFormResponseService
} from './dialog-form/dialog-form.component';
import { Subscription, merge } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DialogFormResponseService]
})
export class AppComponent implements OnDestroy {
  constructor(
    public matDialog: MatDialog,
    private injector: Injector,
    private dialogFormResponseService: DialogFormResponseService) { }

  dialogResponseSub: Subscription;
  dialogResponseStr: string;


  openDialog() {

    const dialogData: DialogInputData = { name: 'Alice' };

    const injector = Injector.create({
      providers: [
        {
          provide: DialogFormDataService,
          useValue: {
            dialogData
          }
        }
      ],
      parent: this.injector
    });

    const data: DialogData = {
      title: 'Dialog Title',
      component: DialogFormComponent,
      injector
    };

    const dialogRef = this.matDialog.open(DialogWrapperComponent, {
      width: '400px',
      data
    });

    this.dialogResponseSub = merge(
      this.dialogFormResponseService.dialogResponse$,
      dialogRef.afterClosed()).subscribe(response => {
        dialogRef.close(); // This closes the dialog box
        if (this.dialogResponseSub) {
          this.dialogResponseSub.unsubscribe();
        }
        if (response) {
          this.dialogResponseStr = response.name + ' likes to eat ' + response.favouriteFood;
        }
      });
  }

  ngOnDestroy() {
    if (this.dialogResponseSub) {
      this.dialogResponseSub.unsubscribe();
    }
  }
}
