import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsoleEditPage } from './console-edit.page';

describe('ConsoleEditPage', () => {
  let component: ConsoleEditPage;
  let fixture: ComponentFixture<ConsoleEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsoleEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
