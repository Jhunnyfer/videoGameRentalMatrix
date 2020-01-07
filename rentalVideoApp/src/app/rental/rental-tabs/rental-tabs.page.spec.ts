import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentalTabsPage } from './rental-tabs.page';

describe('RentalTabsPage', () => {
  let component: RentalTabsPage;
  let fixture: ComponentFixture<RentalTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentalTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
