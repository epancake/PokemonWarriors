import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public pokemon: any;
  public name: string;
  public image: string;
  public toggleSpinner = false;
  public toggleResults = false;
  public types: array;

  constructor(
   private apiCallService: ApiCallService) { }

  ngOnInit(): void {
    console.log('initialized');
    console.log('td', this.toggleDisplay);
    this.image = '';
  }

  performSearch(searchTerm: HTMLInputElement): void {
    this.showSpinner();
    this.apiCallService.pokedexAPI(`${searchTerm.value}`).subscribe((data: any) => {
      this.pokemon = data;
      this.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      this.image = data.sprites.front_shiny;
      this.hideSpinner();
      this.showResults();
    },
    // the second argument is a function which runs on error
    err => console.error(err),
    // the third argument is a function which runs on completion
    () => console.log('done')
    );
    console.log(`User entered: ${searchTerm.value}`);
  }

  showSpinner(): void {
    this.name = '';
    this.toggleSpinner = true;
    console.log('td2', this.toggleDisplay);
  }

  hideSpinner(): void {
    this.toggleSpinner = false;
  }

  showResults(): void {
    this.toggleResults = true;
  }
}
