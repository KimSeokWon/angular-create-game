import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PropertySheetComponent } from './property-sheet/property-sheet.component';
import { ScreenComposerComponent } from './screen-composer/screen-composer.component';
import { FixRowTableComponent } from './components/fix-row-table/fix-row-table.component';
import { FixRowTableService } from './components/fix-row-table/fix-row-table.service';
import { InitDialogComponent } from './init-dialog/init-dialog.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, PropertySheetComponent, ScreenComposerComponent, FixRowTableComponent, InitDialogComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents : [InitDialogComponent],
  providers: [FixRowTableService, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}]
})
export class AppModule { }
