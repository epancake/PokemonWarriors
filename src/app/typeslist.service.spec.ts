import { TestBed, inject } from "@angular/core/testing";
import {
    HttpClientTestingModule,
    HttpTestingController
} from "@angular/common/http/testing";

import { FetchTypesService } from "./typeslist.service";

describe("FetchTypesService", () => {
    let service: FetchTypesService;
    let backend: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FetchTypesService],
            imports: [HttpClientTestingModule]
        });
    });

    beforeEach(() => {
        service = TestBed.get(FetchTypesService);
        backend = TestBed.get(HttpTestingController);
    });

    it("should expect a url", () => {
        service.getJSON().subscribe();
        backend.expectOne(`http://localhost:4200/assets/data.json`);
        backend.verify();
    });
});
