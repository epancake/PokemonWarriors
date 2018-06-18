import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './api-call.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokemon Warriors';
  

  constructor(
    private apiCallService: ApiCallService) { }

  ngOnInit(): void {
    this.apiCallService.getPokemon().subscribe(pokemon => {
      this.pokemon = apokemon
    })
  }

  performSearch(searchTerm: HTMLInputElement): void {
    console.log("response", this.apiCallService.getPokemon().subscribe(data => {
      name: data['name'],
      id:  data['id']
  }))
    console.log(`User entered: ${searchTerm.value}`);
}
}
