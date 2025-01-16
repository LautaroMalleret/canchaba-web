import { Component, Inject, OnInit } from '@angular/core';
import { CanchaService } from '../../services/cancha.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit{
  
  cities: string[] = [];

  constructor(private canchaService: CanchaService) {}
  

  ngOnInit(): void {
    this.canchaService.getCities().subscribe((cities: string[]) => {
      this.cities = cities;
    });

  }



}
