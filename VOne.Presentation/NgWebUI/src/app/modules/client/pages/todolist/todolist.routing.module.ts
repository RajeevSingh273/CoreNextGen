import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { TodoListComponent } from './todolist.component';
import { DotnetcoreComponent } from './dotnetcore/dotnetcore.component';
import { JavaComponent } from './java/java.component';
import { NodejsComponent } from './nodejs/nodejs.component';

const todolistRoutes: Routes = [
    {
        path: '',
        component: TodoListComponent,
        children: [
            { path: 'java', component: JavaComponent },
            { path: 'dotnetcore', component: DotnetcoreComponent },
            { path: 'nodejs', component: NodejsComponent },
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(todolistRoutes)],
    exports: [RouterModule]
})
export class TodoListRouterModule { }

