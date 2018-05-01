import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ParentComponent } from './parent.component';
import { ChieldComponent } from './chield/chield.component';
import { ParentRoutingModule } from './parent.routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ParentRoutingModule
    ],
    declarations: [
        ParentComponent,
        ChieldComponent
    ],
    providers: []
})
export class ParentModule { }
