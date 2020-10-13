import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameTabsPage } from './game-tabs.page';

describe('GameTabsPage', () => {
  let component: GameTabsPage;
  let fixture: ComponentFixture<GameTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
