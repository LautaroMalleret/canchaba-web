import { CommonModule, NgStyle } from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { Cancha } from '../../models/cancha.model';
import { CanchaService } from '../../services/cancha.service';

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
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanchaComponent implements OnInit{

  canchas: Cancha[] = [];

  constructor(private canchaService: CanchaService) {}

  ngOnInit(): void {
    this.canchaService.getAllCanchas().subscribe((canchas: Cancha[]) => {
      this.canchas = canchas;
    });

  }


}
