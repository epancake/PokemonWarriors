import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class FetchTypesService {
    public battleBias = {
        superEffectiveAgainst: [],
        notVeryEffectiveAgainst: [],
        resistantTo: [],
        vulnerableTo: []
    };

    constructor(private http: HttpClient) {}

    getBattleBias(type): void {
        console.log('type', type);
        this.getJSON().subscribe((data: any) => {
            data.map(item => {
                if (type === item.type) {
                    this.battleBias.superEffectiveAgainst = item.superEffectiveAgainst.map(
                        entry => entry.charAt(0).toUpperCase() + entry.slice(1)
                    );
                    this.battleBias.notVeryEffectiveAgainst = item.notVeryEffectiveAgainst.map(
                        entry => entry.charAt(0).toUpperCase() + entry.slice(1)
                    );
                    this.battleBias.resistantTo = item.resistantTo.map(
                        entry => entry.charAt(0).toUpperCase() + entry.slice(1)
                    );
                    this.battleBias.vulnerableTo = item.vulnerableTo.map(
                        entry => entry.charAt(0).toUpperCase() + entry.slice(1)
                    );
                }
            });
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get('./assets/data.json');
    }
}
