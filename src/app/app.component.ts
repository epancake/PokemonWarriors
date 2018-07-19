import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { FetchTypesService } from './typeslist.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public toggleStarterImage = true;
    public toggleSpinner = false;
    public toggleResults = false;
    public name: string;
    public image: string;
    public types = [];
    public battleBias = {};

    constructor(
        private apiCallService: ApiCallService,
        private fetchTypesService: FetchTypesService
    ) {}

    ngOnInit(): void {
        this.image = '';
        this.fetchTypesService.getJSON().subscribe(data => {
            console.log('d', data);
        });
    }

    performSearch(searchTerm: HTMLInputElement): void {
        this.types = [];
        this.toggleResults = false;
        this.removeStarterImage();
        this.showSpinner();
        this.apiCallService.pokedexAPI(`${searchTerm.value}/`).subscribe(
            (data: any) => {
                this.name =
                    data.name.charAt(0).toUpperCase() + data.name.slice(1);
                this.image = data.sprites.front_shiny;
                data.types.map(type => {
                    const upperType =
                        type.type.name.charAt(0).toUpperCase() +
                        type.type.name.slice(1);
                    this.types.push(upperType);
                    this.getBattleBias(type);
                });
                this.hideSpinner();
                this.showResults();
                console.log('pokemon', data);
            },
            err => console.error(err),
            () => console.log('done')
        );
    }

    removeStarterImage(): void {
        this.toggleStarterImage = false;
    }

    showSpinner(): void {
        this.name = '';
        this.toggleSpinner = true;
    }

    hideSpinner(): void {
        this.toggleSpinner = false;
    }

    showResults(): void {
        this.toggleResults = true;
    }

    getBattleBias(type): void {
        this.fetchTypesService.getJSON().subscribe((data: any) => {
            data.map(item => {
                if (type.type.name === item.type) {
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
}
