import { Component, OnInit } from '@angular/core';
import { ChampionBasicInfoService} from '../champion-basic-info.service';
import { ChampionInformation} from '../champion-information';

@Component({
  selector: 'app-champion-dashboard',
  templateUrl: './champion-dashboard.component.html',
  styleUrls: ['./champion-dashboard.component.css']
})
export class ChampionDashboardComponent implements OnInit {

    object: Object;
  champions: ChampionInformation[];



  constructor(private championService: ChampionBasicInfoService) { }

  ngOnInit() {
    this.championService.getChampionInfo().subscribe(result => {
      //this.champions = result;
     // console.log(this.champions);
      this.object = result;
    });
  }

}
