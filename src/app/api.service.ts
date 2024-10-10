import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  // Simulación de registro de usuario
  registerUser(user: any): Observable<any> {
    return this.http.post('https://api.simulacion.com/register', user)
      .pipe(
        catchError(this.handleError<any>('registerUser', { error: 'Error en el registro' }))
      );
  }

  // Manejo de errores simulado
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}




