import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrandCratePage } from './brand-crate.page';

describe('BrandCratePage', () => {
  let component: BrandCratePage;
  let fixture: ComponentFixture<BrandCratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandCratePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrandCratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
