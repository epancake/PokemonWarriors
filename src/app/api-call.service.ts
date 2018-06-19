import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';


@Injectable()
export class ApiCallService {
  pokemonAPI = 'http://pokeapi.salestock.net/api/v2/pokemon/';

  constructor(private _http: HttpClient) { }
  
  pokedexAPI(int): any {
    return this._http.get(this.pokemonAPI + int).pipe(
      // tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError), );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
