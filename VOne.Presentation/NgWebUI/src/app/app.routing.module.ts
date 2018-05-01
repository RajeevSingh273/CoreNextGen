import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './modules/client/components/landing/landing.component';
import { ParentComponent } from './modules/client/pages/parent/parent.component';
import { NodejsComponent } from './modules/client/pages/todolist/nodejs/nodejs.component';
import { DotnetcoreComponent } from './modules/client/pages/todolist/dotnetcore/dotnetcore.component';
import { JavaComponent } from './modules/client/pages/todolist/java/java.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'java', component: JavaComponent },
  { path: 'dotnetcore', component: DotnetcoreComponent },
  { path: 'nodejs', component: NodejsComponent }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
