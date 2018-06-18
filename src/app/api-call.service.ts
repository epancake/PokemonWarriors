import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiCallService {

  constructor(private _http: HttpClient) { }
  
  getPokemon() {
    return this._http.get('http://pokeapi.co/api/v2/pokemon/butterfree')  
  }
}
