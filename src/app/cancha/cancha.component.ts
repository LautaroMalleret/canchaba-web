import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { Cancha } from '../../models/cancha.model';
import { CanchaService } from '../../services/cancha.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavComponent } from '../nav/nav.component';
import { FilterComponent } from '../filter/filter.component';
import { MatDivider } from '@angular/material/divider';

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
    NavComponent,
    FilterComponent,
    MatDivider
    
    ],
  changeDetection: ChangeDetectionStrategy.Default, //detecta los cambios en canchas[] para actualizar la vista
})
export class CanchaComponent implements OnInit{

  canchas: Cancha[] = [];
  showDetails: boolean[] = [];

  constructor(private canchaService: CanchaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.canchaService.getAllCanchas().subscribe((canchas: Cancha[]) => {
      this.canchas = canchas;
      this.showDetails = new Array(canchas.length).fill(false); //inicializa el array de booleanos para mostrar detalles

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
  onSearchChanged(searchTerm: string): void {
    this.canchaService.searchCanchasByName(searchTerm).subscribe((canchas: Cancha[]) => {
      this.canchas = canchas;
      this.showDetails = new Array(canchas.length).fill(false); //inicializa el array de booleanos para mostrar detalles
    });
  }


}
