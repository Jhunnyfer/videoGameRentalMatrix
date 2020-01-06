import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentalCreatePage } from './rental-create.page';

describe('RentalCreatePage', () => {
  let component: RentalCreatePage;
  let fixture: ComponentFixture<RentalCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentalCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
