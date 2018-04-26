import { BoxLayoutComponent } from './pagelayout/admin-layout/box-layout/box-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './modules/client/landing/landing.component';
import { NavigationComponent } from './modules/client/shared/navigation/navigation.component';
import { FooterComponent } from './modules/client/shared/footer/footer.component';
import { FullLayoutClientComponent } from './pagelayout/client-layout/full-layout/full-layout.component';
import { BoxLayoutClientComponent } from './pagelayout/client-layout/box-layout/box-layout.component';
import { ParentComponent } from './modules/client/parent/parent.component';
import { JavaComponent } from './modules/client/java/java.component';
import { DotnetcoreComponent } from './modules/client/dotnetcore/dotnetcore.component';
import { NodejsComponent } from './modules/client/nodejs/nodejs.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    FooterComponent,
    FullLayoutClientComponent,
    BoxLayoutClientComponent,
    ParentComponent,
    JavaComponent,
    DotnetcoreComponent,
    NodejsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
