import { Component, OnInit, Input } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { FetchTypesService } from '../typeslist.service';

@Component({
    selector: 'app-poke-card',
    templateUrl: './poke-card.component.html',
    styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {
    @Input() toggleResults: boolean;
    @Input() image: string;
    @Input() types: Array<string>;

    public name: string = this.apiCallService.name;
    public battleBias: object = this.fetchTypesService.battleBias;

    constructor(
        private apiCallService: ApiCallService,
        private fetchTypesService: FetchTypesService
    ) {}

    ngOnInit() {}
}
