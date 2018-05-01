
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ParentComponent } from "./parent.component";
import { ChieldComponent } from "./chield/chield.component";

const parentRoutes: Routes = [
  {
    path: "parent",
    component: ParentComponent,
    children: [
      {
        path: "chield1",
        component: ChieldComponent
      },
      {
        path: "chield2",
        component: ChieldComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(parentRoutes)],
  exports: [RouterModule]
})
export class ParentRoutingModule {}
