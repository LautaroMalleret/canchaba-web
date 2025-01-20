import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cancha } from '../models/cancha.model';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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
    map(response => response.object),
    catchError(error => {
      console.error('Error fetching all canchas:', error);
      return of([]); // Return un array vacio para manejar el error
    })
  );
}

// Filtrar canchas por nombre
searchCanchasByName(name: string): Observable<Cancha[]> {
  return this.http.get<{message: string; object: Cancha[]}>(`${this.apiUrl}/filterByName?name=${name}`)
  .pipe(
    map(response => response.object),
    catchError(error => {
      console.error(`Error searching canchas by name "${name}":`, error);
      return of([]); // Return un array vacio para manejar el error
    })
  );
}

// Filtrar canchas por ciudad, tipo de suelo y cantidad de jugadores
filterCanchas(
  city?: string,
  type?: string,
  size?: string
): Observable<Cancha[]> {
  if((!city && !type && !size) || (city === '' && type === '' && size === '')) {
    return this.getAllCanchas();
  
  }
  const params = {
    city: city || '',
    type: type || '',
    size: size || ''
  };
  return this.http.get<{message: string; object: Cancha[]}>
  (`${this.apiUrl}/filter?city=${params.city}&type=${params.type}&size=${params.size}`)
  .pipe(
    map(response => response.object),
    catchError(error => {
      console.error('Error filtering canchas:', error);
      return of([]); // Return un array vacio para manejar el error
    })
  );
}

// Solicito todos los nombres de las ciudades para usar en el filtro
getCities(): Observable<string[]> {
  return this.http.get<{ message: string; object: string[] }>
  (`${this.apiUrl}/cities`)
  .pipe(
    map(response => response.object),
    catchError(error => {
      console.error('Error fetching cities:', error);
      return of([]); // Return un array vacio para manejar el error
    })
  );
}
}