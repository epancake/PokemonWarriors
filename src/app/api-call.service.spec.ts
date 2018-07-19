import { TestBed, inject } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
    TestRequest
} from '@angular/common/http/testing';

import { ApiCallService } from './api-call.service';

describe('ApiCallService', () => {
    let service: ApiCallService;
    let backend: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ApiCallService],
            imports: [HttpClientTestingModule]
        });
    });

    beforeEach(() => {
        service = TestBed.get(ApiCallService);
        backend = TestBed.get(HttpTestingController);
    });

    it('should expect a url', () => {
        service.pokedexAPI('machop').subscribe();
        backend.expectOne(`http://pokeapi.salestock.net/api/v2/pokemon/machop`);
        backend.verify();
    });
});
