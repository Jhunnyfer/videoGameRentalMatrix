import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrandTabsPage } from './brand-tabs.page';

describe('BrandTabsPage', () => {
  let component: BrandTabsPage;
  let fixture: ComponentFixture<BrandTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrandTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
