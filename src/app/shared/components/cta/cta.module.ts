import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CTAComponent } from "./components/cta.component";

@NgModule ({
  imports: [CommonModule],
  declarations: [CTAComponent],
  exports: [CTAComponent]
})

export class CTAModule {}
