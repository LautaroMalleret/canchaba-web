import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-add-page',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDivider, MatButton],
  templateUrl: './add-page.component.html',
  styleUrl: './add-page.component.css'
})
export class AddPageComponent {

  redirectToForm() {
    // Redirect to the form page
    window.open('https://forms.gle/yju1D2zf1B3bzgR98', '_blank');
  }    

}
