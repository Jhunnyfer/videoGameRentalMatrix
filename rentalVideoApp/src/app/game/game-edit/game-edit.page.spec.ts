import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameEditPage } from './game-edit.page';

describe('GameEditPage', () => {
  let component: GameEditPage;
  let fixture: ComponentFixture<GameEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
