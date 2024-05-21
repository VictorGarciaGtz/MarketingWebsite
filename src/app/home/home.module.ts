import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarModule } from "../shared/components/navbar/navbar.module";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { HomeRoutingModule } from "./home-routing.module";



@NgModule({
  imports: [
      CommonModule,
      NavbarModule,
      HomeRoutingModule,
    ],
  declarations: [
    HomePageComponent
  ]
})

export class HomeModule {

}
