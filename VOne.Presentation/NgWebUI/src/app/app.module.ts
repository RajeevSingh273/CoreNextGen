import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./modules/client/landing/landing.component";
import { NavigationComponent } from "./modules/client/shared/navigation/navigation.component";
import { FooterComponent } from "./modules/client/shared/footer/footer.component";
import { ParentComponent } from "./modules/client/parent/parent.component";
import { JavaComponent } from "./modules/client/java/java.component";
import { DotnetcoreComponent } from "./modules/client/dotnetcore/dotnetcore.component";
import { NodejsComponent } from "./modules/client/nodejs/nodejs.component";
import { LayoutAdminComponent } from './pagelayout/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './pagelayout/layout-client/layout-client.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    FooterComponent,

    BoxLayoutClientComponent,
    ParentComponent,
    JavaComponent,
    DotnetcoreComponent,
    NodejsComponent,
    LayoutAdminComponent,
    LayoutClientComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
