import { Component, ElementRef, ViewChild, viewChild } from "@angular/core";

@Component ({
  selector: 'mkt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  @ViewChild('menuIcon') menuIcon!: ElementRef;
  menu!: HTMLElement;

  contructor() {
  }

  ngAfterViewInit(): void {
    this.menu = this.menuIcon?.nativeElement;
  }

  // Function to Open Hamburguer menu and toggle menu icon
  protected openMenu(): void {
    this.menu.classList.toggle('la-times');
    this.menu.classList.toggle('la-bars');
  }
}
