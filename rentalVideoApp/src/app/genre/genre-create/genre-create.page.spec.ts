import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenreCreatePage } from './genre-create.page';

describe('GenreCreatePage', () => {
  let component: GenreCreatePage;
  let fixture: ComponentFixture<GenreCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenreCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
