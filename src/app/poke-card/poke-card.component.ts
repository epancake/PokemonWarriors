import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-poke-card",
    templateUrl: "./poke-card.component.html",
    styleUrls: ["./poke-card.component.scss"]
})
export class PokeCardComponent implements OnInit {
    @Input() toggleResults: boolean;
    @Input() name: string;
    @Input() image: string;
    @Input() types: Array<string>;
    @Input() battleBias: object;

    constructor() {}

    ngOnInit() {}
}
