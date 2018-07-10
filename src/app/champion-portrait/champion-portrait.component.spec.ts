import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionPortraitComponent } from './champion-portrait.component';

describe('ChampionPortraitComponent', () => {
  let component: ChampionPortraitComponent;
  let fixture: ComponentFixture<ChampionPortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionPortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
