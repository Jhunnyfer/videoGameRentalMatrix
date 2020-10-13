import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsoleCreatePage } from './console-create.page';

describe('ConsoleCreatePage', () => {
  let component: ConsoleCreatePage;
  let fixture: ComponentFixture<ConsoleCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsoleCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
