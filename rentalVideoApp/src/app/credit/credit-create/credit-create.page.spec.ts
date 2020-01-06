import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreditCreatePage } from './credit-create.page';

describe('CreditCreatePage', () => {
  let component: CreditCreatePage;
  let fixture: ComponentFixture<CreditCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
