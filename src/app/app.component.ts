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
  public name: string;
  public image: string;
  public types: array = [];

  constructor(
   private apiCallService: ApiCallService) { }

  ngOnInit(): void {
    this.image = '';
  }

  performSearch(searchTerm: HTMLInputElement): void {
    this.types = [];
    this.toggleResults = false;
    this.removeStarterImage();
    this.showSpinner();
    this.apiCallService.pokedexAPI(`${searchTerm.value}`).subscribe((data: any) => {
      this.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      this.image = data.sprites.front_shiny;
      data.types.map(type => {
        const upperType = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
        this.types.push(upperType);
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
    console.log('td2', this.toggleDisplay);
  }

  hideSpinner(): void {
    this.toggleSpinner = false;
  }

  showResults(): void {
    this.toggleResults = true;
  }
}
