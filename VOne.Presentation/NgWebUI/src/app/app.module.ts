import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './modules/client/components/landing/landing.component';
import { NavigationComponent } from './modules/client/components/shared/navigation/navigation.component';
import { FooterComponent } from './modules/client/components/shared/footer/footer.component';
import { LayoutAdminComponent } from './pagelayout/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './pagelayout/layout-client/layout-client.component';
import { PageNotFoundComponent } from './modules/client/components/shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    FooterComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
