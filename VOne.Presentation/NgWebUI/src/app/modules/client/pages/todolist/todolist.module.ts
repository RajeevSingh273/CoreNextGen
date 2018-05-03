import { TodoListRouterModule } from './todolist.routing.module';
import { NodejsComponent } from './nodejs/nodejs.component';
import { DotnetcoreComponent } from './dotnetcore/dotnetcore.component';
import { JavaComponent } from './java/java.component';
import { TodoListComponent } from './todolist.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        TodoListComponent,
        JavaComponent,
        DotnetcoreComponent,
        NodejsComponent
    ],
    imports: [TodoListRouterModule],
})

export class TodoListModule { }
