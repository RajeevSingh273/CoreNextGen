import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './modules/client/components/landing/landing.component';


const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent },
  {
    path: 'parent',
    loadChildren: 'app/modules/client/pages/parent/parent.module#ParentModule'
  },
  {
    path: 'todolist',
    loadChildren: 'app/modules/client/pages/todolist/todolist.module#TodoListModule'
  },
  { path: '**', component: LandingComponent } // PageNotFoundComponent
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
