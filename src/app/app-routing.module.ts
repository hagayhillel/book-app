import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "src/app/login-page/login-page.component";
import { HomePageComponent } from "src/app/home-page/home-page.component";
import { FavoritesPageComponent } from "src/app/favorites-page/favorites-page.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", component: LoginPageComponent },
  {
    path: "home",
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  { path: "favorites", component: FavoritesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
