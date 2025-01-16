import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cancha } from '../models/cancha.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CanchaService {
  private apiUrl = 'https://canchasba-api.onrender.com/api/v1';

  constructor(private http: HttpClient) {}

  // Obtener todas las canchas
  getAllCanchas(): Observable<Cancha[]> {
    return this.http.get<{message: string; object: Cancha[]}>(`${this.apiUrl}/canchas`)
    .pipe(
      map(response => response.object)
    );
  }

  // Obtener una cancha por ID
  getCanchaById(id: number): Observable<Cancha> {
    return this.http.get<Cancha>(`${this.apiUrl}/cancha/${id}`);
  }

  // Filtrar canchas por nombre
  searchCanchasByName(name: string): Observable<Cancha[]> {
    return this.http.get<Cancha[]>(`${this.apiUrl}?name=${name}`);
  }

  
  // Filtrar canchas por ciudad, tipo de suelo y cantidad de jugadores
  filterCanchas(
    city?: string,
    type?: string,
    players?: string
  ): Observable<Cancha[]> {
    let params = new URLSearchParams();
    if (city) params.append('city', city);
    if (type) params.append('type', type);
    if (players) params.append('quantity', players);

    return this.http.get<Cancha[]>(`${this.apiUrl}?${params.toString()}`);
  }

  //solicito todos los nombres de las ciudades para usar en el filtro
  getCities(): Observable<string[]> {
    return this.http.get<{ message: string; object: string[] }>(`${this.apiUrl}/cities`)
    .pipe(
      map(response => response.object)
    );
  }
}
