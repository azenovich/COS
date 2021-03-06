import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarmonicResultComponent } from './harmonic-result/harmonic-result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lab1',
    pathMatch: 'full'
  },
  {
    path: 'lab1',
    children: [
      {
        path: '',
        redirectTo: 'harmonic',
        pathMatch: 'full'
      },
      {
        path: 'harmonic',
        component: HarmonicResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lab1RoutingModule { }
