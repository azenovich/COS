import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Lab1RoutingModule } from './lab1-routing.module';
import { HarmonicResultComponent } from './harmonic-result/harmonic-result.component';
import { HarmonicSignalService } from './shared/services';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Lab1RoutingModule,
    SharedModule,
    FormsModule,
  ],
  providers: [
    HarmonicSignalService,
  ],
  declarations: [HarmonicResultComponent]
})
export class Lab1Module { }
