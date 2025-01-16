import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavComponent } from "./nav/nav.component";
import { FilterComponent } from "./filter/filter.component";
import { CanchaComponent } from "./cancha/cancha.component";
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    NavComponent,
    FilterComponent,
    CanchaComponent,
    MatDividerModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'canchas-web';
}
