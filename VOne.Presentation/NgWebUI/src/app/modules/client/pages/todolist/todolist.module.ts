import { TodoListRouterModule } from './todolist.routing.module';
import { NodejsComponent } from './nodejs/nodejs.component';
import { DotnetcoreComponent } from './dotnetcore/dotnetcore.component';
import { JavaComponent } from './java/java.component';
import { TodoListComponent } from './todolist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddEditListComponent } from './nodejs/add-edit-list/add-edit-list.component';
import { TodoService } from './todo.service';

@NgModule({
    declarations: [
        TodoListComponent,
        JavaComponent,
        DotnetcoreComponent,
        NodejsComponent,
        AddEditListComponent
    ],
    imports: [TodoListRouterModule, FormsModule, CommonModule],
    providers: [TodoService]
})

export class TodoListModule { }
