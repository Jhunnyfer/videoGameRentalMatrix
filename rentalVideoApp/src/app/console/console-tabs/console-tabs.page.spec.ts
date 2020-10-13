import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsoleTabsPage } from './console-tabs.page';

describe('ConsoleTabsPage', () => {
  let component: ConsoleTabsPage;
  let fixture: ComponentFixture<ConsoleTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsoleTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
