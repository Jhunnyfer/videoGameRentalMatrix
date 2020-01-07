import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmTabsPage } from './film-tabs.page';

describe('FilmTabsPage', () => {
  let component: FilmTabsPage;
  let fixture: ComponentFixture<FilmTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
