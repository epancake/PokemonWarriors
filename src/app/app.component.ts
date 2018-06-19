import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './api-call.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public pokemon;
  public name: ''
  public image: string;

  constructor(
    private apiCallService: ApiCallService) { }

  ngOnInit(): void {
    console.log('initialized')
    this.image = 'https://rankedboost.com/wp-content/plugins/ice/pokemon-go/Golem-Pokemon-Go.png'
    
  }

  performSearch(searchTerm: HTMLInputElement): void {
    this.apiCallService.pokedexAPI(`${searchTerm.value}`).subscribe(data => {
      this.pokemon = data;
      this.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      this.image = data.sprites.front_shiny
    },
    // the second argument is a function which runs on error
    err => console.error(err),
    // the third argument is a function which runs on completion
    () => console.log('done loading pokemon', this.pokemon)
    )
    console.log(`User entered: ${searchTerm.value}`);
}
}
