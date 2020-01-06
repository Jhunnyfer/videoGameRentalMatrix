import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenreEditPage } from './genre-edit.page';

describe('GenreEditPage', () => {
  let component: GenreEditPage;
  let fixture: ComponentFixture<GenreEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenreEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
