import { Injectable } from '@angular/core';
import { ChampionInformation } from '../champion-information';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ChampionBasicInfoService {

    constructor(private http: HttpClient) { }


    getChampionInfo(): Observable<any> {
        const baseUrl = 'https://na1.api.riotgames.com/lol';
        const apiKey = 'RGAPI-af763f8b-1d02-427b-a7f0-b0409f1c2879';
        const apiUrl = `${baseUrl}/static-data/v3/champions?locale=en_US&tags=image&dataById=true&api_key=${apiKey}`;
        // const apiUrl2 = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Tryndamere?
        // api_key=RGAPI-af763f8b-1d02-427b-a7f0-b0409f1c2879';
        return of(null);

        // let array: ChampionInformation[] = [];
        // array.push(new ChampionInformation(1, 'hi', 'bye', '1'));
        // return of(array);
        /*.map(res => {
            return res.json().results.map(champion => {
                return new ChampionInformation(
                    champion.id,
                    champion.name,
                    champion.key,
                    champion.image.json().results.full

                );
            });
        });*/
    }
}
