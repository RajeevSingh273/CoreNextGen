
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { ParentComponent } from "./parent.component";
import { ChieldComponent } from "./chield/chield.component";
import { Chield2Component } from "./chield2/chield2.component";
import { ParentRoutingModule } from "./parent.routing.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ParentRoutingModule],
  declarations: [ParentComponent, ChieldComponent, Chield2Component],
  providers: []
})
export class ParentModule {}
