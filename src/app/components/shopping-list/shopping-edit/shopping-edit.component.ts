import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')
  nameInput: ElementRef;

  @ViewChild('amountInput')
  amountInput: ElementRef;

  ingredient: Ingredient;

  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();

  @Output()
  ingredientDeleted = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  addIngredient() {
    this.ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );

    this.ingredientAdded.emit(this.ingredient);
  }

  deleteIngredient() {}
}
