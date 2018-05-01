
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentComponent } from './parent.component';
import { ChieldComponent } from './chield/chield.component';

const parentRoutes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      {
        path: 'chield1',
        component: ChieldComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(parentRoutes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
