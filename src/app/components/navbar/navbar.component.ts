import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() menu: any[];
  isShowMobileMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getSubMenuWidth(subMenuLength) {
    if (subMenuLength <= 5) {
      return 'auto';
    }

    return Math.ceil(subMenuLength / 5) * 200 + 20 + 'px';
  }

  hoverItem(menuItem) {
    this.menu.forEach(menuItem_ => menuItem_.isHovered = menuItem.title + menuItem.path === menuItem_.title + menuItem_.path);
  }

  unHoverItem(menuItem) {
    menuItem.isHovered = false;
  }
}
