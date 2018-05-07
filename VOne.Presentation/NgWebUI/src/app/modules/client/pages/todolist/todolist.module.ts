import { TodoListRouterModule } from './todolist.routing.module';
import { NodejsComponent } from './nodejs/nodejs.component';
import { DotnetcoreComponent } from './dotnetcore/dotnetcore.component';
import { JavaComponent } from './java/java.component';
import { TodoListComponent } from './todolist.component';
import { NgModule } from '@angular/core';
import { AddEditListComponent } from './nodejs/add-edit-list/add-edit-list.component';

@NgModule({
    declarations: [
        TodoListComponent,
        JavaComponent,
        DotnetcoreComponent,
        NodejsComponent,
        AddEditListComponent
    ],
    imports: [TodoListRouterModule],
})

export class TodoListModule { }
