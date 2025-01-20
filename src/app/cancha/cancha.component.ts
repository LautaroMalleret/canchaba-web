import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { Cancha } from '../../models/cancha.model';
import { CanchaService } from '../../services/cancha.service';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterComponent } from '../filter/filter.component';
import { MatDivider } from '@angular/material/divider';
import { SearchService } from '../../services/search.service';

/**
 * @title Card with actions alignment option
 */
@Component({
  selector: 'app-cancha',
  templateUrl: './cancha.component.html',
  styleUrls: ['./cancha.component.css'],
  standalone: true,
  imports: [MatCardModule, 
    MatButtonModule, 
    MatChipsModule, 
    MatIconModule, 
    CommonModule,
    MatDialogModule,
    FilterComponent,
    MatDivider    
    ],
  changeDetection: ChangeDetectionStrategy.Default, //detecta los cambios en canchas[] para actualizar la vista
})
export class CanchaComponent implements OnInit{

  canchas: Cancha[] = [];           //canchas de la vista
  showDetails: boolean[] = [];      //para mostrar detalles de las canchas

  constructor(
    private canchaService: CanchaService, //Para endpoints 
    private searchService: SearchService  //Para comunicacion con el input de busqueda
  ) 
    {}

  ngOnInit(): void {
    //Para ver la lista de todas las canchas al inicio.
    this.canchaService.getAllCanchas().subscribe((canchas: Cancha[]) => {
      this.canchas = canchas;
      this.showDetails = new Array(canchas.length).fill(false); //inicializa el array de booleanos para mostrar detalles

    });

    //Para actualizar las canchas a la busqueda por nombre en la vista
    this.searchService.searchTerm$.subscribe((searchTerm: string) => {  //Observable al servicio
      if (searchTerm) {
        this.searchByName(searchTerm); // Llama al método que ejecuta el endpoint
      }
    });
  }

  //Para expandir la informacion de las canchas en la vista
  toggleDetails(index: number): void {
    this.showDetails[index] = !this.showDetails[index];
  }

  //Para filtrar las canchas en la vista
  onFilterChanged(filter: any): void {
    this.canchaService.filterCanchas(
      filter.city,filter.type,filter.size).subscribe((canchasFiltro: Cancha[]) => {
      this.canchas = canchasFiltro;
      this.showDetails = new Array(canchasFiltro.length).fill(false); //inicializa el array de booleanos para mostrar detalles
    });
  }

  //Para buscar canchas por nombre
  searchByName(searchTerm: string): void {
  this.canchaService.searchCanchasByName(searchTerm).subscribe((canchas: Cancha[]) => {
  this.canchas = canchas;
  this.showDetails = new Array(canchas.length).fill(false); //inicializa el array de booleanos para mostrar detalles
  });
 

  }
}
