import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { ModifierServiceComponent } from "./pages/ServiceType/ModifierService/modifier-service/modifier-service.component";
import { RendezVousComponent } from './pages/rendez-vous/rendez-vous.component';
import { TestPageComponent } from './pages/testPage/test-page/test-page.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, RendezVousComponent, TestPageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
