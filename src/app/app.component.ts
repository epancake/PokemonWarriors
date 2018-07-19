import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public toggleStarterImage = true;
    public toggleSpinner = false;
    public toggleResults = false;
    public image: string;
    public types = [];

    constructor(private apiCallService: ApiCallService) {}

    ngOnInit(): void {
        this.image = '';
    }

    performSearch(searchTerm: HTMLInputElement): void {
        // this.types = [];
        this.toggleResults = false;
        this.removeStarterImage();
        this.showSpinner();
        this.apiCallService.getPokemonApiData(searchTerm.value).subscribe(
            data => {
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
        // this.name = '';
        this.toggleSpinner = true;
    }

    hideSpinner(): void {
        this.toggleSpinner = false;
    }

    showResults(): void {
        this.toggleResults = true;
    }
}
