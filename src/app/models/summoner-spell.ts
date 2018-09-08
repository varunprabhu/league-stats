import {Image} from './image';
import {SummonerSpellVars} from './summoner-spell-vars';

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
    effect: number[];
    effectBurn: string[];
    vars: SummonerSpellVars[];
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
