import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavButton } from 'src/app/types/nav-buttons.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  NavButton = NavButton;

  @Output()
  navButtonClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onNavBtnClick(button: NavButton) {
    this.navButtonClicked.emit(button);
  }
}
