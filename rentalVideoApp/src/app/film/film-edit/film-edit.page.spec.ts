import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmEditPage } from './film-edit.page';

describe('FilmEditPage', () => {
  let component: FilmEditPage;
  let fixture: ComponentFixture<FilmEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
