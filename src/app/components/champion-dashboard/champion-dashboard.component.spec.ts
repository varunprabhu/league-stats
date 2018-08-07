import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionDashboardComponent } from './champion-dashboard.component';

describe('ChampionDashboardComponent', () => {
  let component: ChampionDashboardComponent;
  let fixture: ComponentFixture<ChampionDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
