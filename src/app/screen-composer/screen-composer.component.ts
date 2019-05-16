import { Component, OnInit } from '@angular/core';
import { InitDialogComponent } from '../init-dialog/init-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-screen-composer',
  templateUrl: './screen-composer.component.html',
  styleUrls: ['./screen-composer.component.css']
})
export class ScreenComposerComponent implements OnInit {
  private dialogRef;
  private shown = false;
  constructor(public dialog: MatDialog) { 

  }

  ngOnInit() {
    this.dialogRef = this.dialog.open(InitDialogComponent, {
      height: '800px',
      width: '800px',
    });
  }

  toggle() {
    this.shown = !this.shown;
  }
}