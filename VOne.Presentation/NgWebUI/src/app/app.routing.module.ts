import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './modules/client/components/landing/landing.component';
import { PageNotFoundComponent } from './modules/client/components/shared/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
  { path: '**', component: PageNotFoundComponent } // PageNotFoundComponent
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
