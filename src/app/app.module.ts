import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ButtonModule } from './shared/components/button/button.module';
import { CardModule } from './shared/components/card/card.module';
import { CTAModule } from './shared/components/cta/cta.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ButtonModule,
    CardModule,
    CTAModule,
    FooterModule,
    NavbarModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
