import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { FetchTypesService } from './typeslist.service';

@Injectable()
export class ApiCallService {
    pokemonAPI = 'http://pokeapi.salestock.net/api/v2/pokemon/';
    public name = 'emily';
    public image: string;
    public types = [];
    constructor(private _http: HttpClient,
        private fetchTypesService: FetchTypesService) {}

    getPokemonApiData(searchTerm): any {
        this.pokedexAPI(`${searchTerm}/`).subscribe(
            (data: any) => {
                console.log('rawDataFromAPI', data);
                this.name =
                    data.name.charAt(0).toUpperCase() + data.name.slice(1);
                    console.log('name', this.name);
                this.image = data.sprites.front_shiny;
                data.types.map(type => {
                    const upperType =
                        type.type.name.charAt(0).toUpperCase() +
                        type.type.name.slice(1);
                    this.types.push(upperType);
                });
            console.log('pokemon', data);
            this.types.map(type => this.fetchTypesService.getBattleBias(type));
        },
        err => console.error(err),
        () => console.log('done')
        );
    return this.pokedexAPI(`${searchTerm}/`);
    }

    pokedexAPI(int): any {
        return this._http.get(this.pokemonAPI + int).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(err) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${
                err.status
            }, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
