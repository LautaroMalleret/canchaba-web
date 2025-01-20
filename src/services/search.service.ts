import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchSubject.asObservable();

//Para buscar por nombre envia la busqueda al servicio 
  setSearchTerm(term: string) {
    this.searchSubject.next(term);
  }
}
