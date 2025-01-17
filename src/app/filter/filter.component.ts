import { Component, Inject, OnInit, Output, EventEmitter, NgModule} from '@angular/core';
import { CanchaService } from '../../services/cancha.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit{
  
  cities: string[] = [];  // Lo relleno cuando se inicializa el componente
  @Output() filterChanged = new EventEmitter<any>();

  sizes: string[] = ['5', '7', '11'];
  types: string[] = ['CESPED', 'SINTETICO', 'PISO'];

  filtro = {
    city: '',
    size: '',
    type: ''
  };
  constructor(private canchaService: CanchaService) {}
  

  ngOnInit(): void {  // Se ejecuta cuando el componente se inicializa 
    this.canchaService.getCities().subscribe((cities: string[]) => {  // Se suscribe al observable que devuelve TODAS las ciudades
      this.cities = cities;
    });

  }

  applyFilter(): void {
    this.filterChanged.emit(this.filtro);
  }



}
