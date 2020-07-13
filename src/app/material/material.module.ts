import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button' ;
import { MatIconModule } from '@angular/material/icon' ;
import { MatListModule } from '@angular/material/list' ;
import { MatToolbarModule } from '@angular/material/toolbar' ;
import { MatMenuModule } from '@angular/material/menu' ;
import { MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { MatSliderModule } from '@angular/material/slider';
const MaterialComponents =[
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatDialogModule,
  MatSliderModule
]


@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} }],
})
export class MaterialModule { }
