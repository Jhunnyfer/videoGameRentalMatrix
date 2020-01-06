import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmCreatePage } from './film-create.page';

describe('FilmCreatePage', () => {
  let component: FilmCreatePage;
  let fixture: ComponentFixture<FilmCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
