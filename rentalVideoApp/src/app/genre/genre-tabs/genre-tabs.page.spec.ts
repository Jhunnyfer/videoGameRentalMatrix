import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenreTabsPage } from './genre-tabs.page';

describe('GenreTabsPage', () => {
  let component: GenreTabsPage;
  let fixture: ComponentFixture<GenreTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenreTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
