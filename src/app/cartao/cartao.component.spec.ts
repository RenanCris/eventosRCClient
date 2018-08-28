import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraCartaoComponent } from './cartao.component';

describe('CartaoComponent', () => {
  let component: CompraCartaoComponent;
  let fixture: ComponentFixture<CompraCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
