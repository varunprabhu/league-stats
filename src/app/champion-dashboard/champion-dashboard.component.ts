import { Component, OnInit } from '@angular/core';
import { ChampionBasicInfoService } from '../champion-basic-info/champion-basic-info.service';
import { ChampionInformation } from '../champion-information';

@Component({
  selector: 'app-champion-dashboard',
  templateUrl: './champion-dashboard.component.html',
  styleUrls: ['./champion-dashboard.component.scss']
})
export class ChampionDashboardComponent implements OnInit {

  object;
  champions: ChampionInformation[];



  constructor(private championService: ChampionBasicInfoService) { }

  ngOnInit() {
    this.object = 'hello world';
    this.championService.getChampionInfo().subscribe(result => {
      console.log(result);
      this.champions = result;
    });
  }

}
