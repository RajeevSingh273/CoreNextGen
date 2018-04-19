import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./modules/client/landing/landing.component";
import { NavigationComponent } from "./modules/client/shared/navigation/navigation.component";
import { FooterComponent } from "./modules/client/shared/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
