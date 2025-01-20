import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-nav',
  imports: [FormsModule, MatIcon, MatButtonModule, MatMenuModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private searchService: SearchService) {}

  searchTerm: string = '';  //variable para almacenar la busqueda

  //envia la busqueda al servicio
  onSearchChanged(): void {
    this.searchService.setSearchTerm(this.searchTerm);
  }


}
