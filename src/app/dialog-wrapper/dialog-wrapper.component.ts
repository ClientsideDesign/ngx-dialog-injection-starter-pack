import { Component, OnInit, Inject, Injector } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-wrapper',
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: ['./dialog-wrapper.component.css']
})
export class DialogWrapperComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
  }
}

export interface DialogData {
  title: string;
  component: ComponentType<any>;
  injector: Injector;
}
