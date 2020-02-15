import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from "@angular/common/http";
import {
  MatSliderModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule,
  MatIconModule
} from "@angular/material";

import { LoginService } from "src/app/services/login.service";
import { HomePageComponent } from "./home-page/home-page.component";
import { FavoritesPageComponent } from "./favorites-page/favorites-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FavoritesPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatExpansionModule,
    MatIconModule,
    NgxPaginationModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
