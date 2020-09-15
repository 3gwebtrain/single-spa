import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceComponent } from "./service/service.component";
import { ContactComponent } from "./contact/contact.component";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { MyLibraryModule } from "my-library";

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ContactComponent,
    EmptyRouteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MyLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
