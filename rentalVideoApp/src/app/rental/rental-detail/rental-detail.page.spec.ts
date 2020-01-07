import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentalDetailPage } from './rental-detail.page';

describe('RentalDetailPage', () => {
  let component: RentalDetailPage;
  let fixture: ComponentFixture<RentalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
