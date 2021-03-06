import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ChampionInformation } from '../../models/champion-information';

@Injectable({
    providedIn: 'root'
})
export class ChampionBasicInfoService {

    constructor(private http: HttpClient) { }


    getChampionInfo(): Observable<any> {
        const baseUrl = 'https://na1.api.riotgames.com/lol';
        const apiKey = 'RGAPI-af763f8b-1d02-427b-a7f0-b0409f1c2879';
        const apiUrl = `${baseUrl}/static-data/v3/champions?locale=en_US&tags=image&dataById=true&api_key=${apiKey}`;


        const array: ChampionInformation[] = [];
        for (let i = 0; i < 10; i++) {
            array.push(new ChampionInformation(i, 'name', 'key', 'imagename'));

        }
        return of(array);
    }
}
