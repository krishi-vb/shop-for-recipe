import { Component, Input } from '@angular/core';
import { NavButton } from './types/nav-buttons.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shop-for-recipe';

  NAVBUTTON = NavButton;

  btnClick: NavButton = NavButton.RECIPES;

  navButtonClicked(button: NavButton) {
    this.btnClick = button;
  }
}
