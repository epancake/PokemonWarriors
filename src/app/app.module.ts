import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ApiCallService } from "./api-call.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { FetchTypesService } from "./typeslist.service";
import { PokeCardComponent } from "./poke-card/poke-card.component";

@NgModule({
    declarations: [AppComponent, PokeCardComponent],
    imports: [
        BrowserModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        BrowserAnimationsModule,
        ProgressSpinnerModule
    ],
    providers: [ApiCallService, FetchTypesService],
    bootstrap: [AppComponent]
})
export class AppModule {}
