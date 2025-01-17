import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-nav',
  imports: [FormsModule, MatIcon],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  @Output() searchChanged = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch(): void {
    this.searchChanged.emit(this.searchTerm);
  }
}
