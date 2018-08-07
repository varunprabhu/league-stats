import { Component, OnInit } from '@angular/core';
import { ChampionInformation } from '../../models/champion-information';
import { ChampionBasicInfoService } from '../../services/champion-basic-info/champion-basic-info.service';

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
