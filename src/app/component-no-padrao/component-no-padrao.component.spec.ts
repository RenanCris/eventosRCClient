import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNoPadraoComponent } from './component-no-padrao.component';

describe('ComponentNoPadraoComponent', () => {
  let component: ComponentNoPadraoComponent;
  let fixture: ComponentFixture<ComponentNoPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentNoPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
