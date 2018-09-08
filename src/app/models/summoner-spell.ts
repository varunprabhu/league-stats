import {Image} from './image';

export class SummonerSpell {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    "effect": [
        null,
        [
            95
            ],
        [
            20
            ]
        ],
    "effectBurn": [
        null,
        "95",
        "20"
        ],
    "vars": [],
    key: string;
    summonerLevel: number;
    modes: string[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: Image;
    resource: string;

}
