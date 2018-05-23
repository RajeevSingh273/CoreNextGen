import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentComponent } from './parent.component';
import { ChieldComponent } from './chield/chield.component';
import { Chield2Component } from './chield2/chield2.component';

const parentRoutes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      {
        path: 'chield1',
        component: ChieldComponent
      },
      {
        path: 'chield2',
        component: Chield2Component
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(parentRoutes)],
  exports: [RouterModule]
})
export class ParentRoutingModule {}
