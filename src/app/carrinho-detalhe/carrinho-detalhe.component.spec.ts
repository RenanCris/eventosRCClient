import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoDetalheComponent } from './carrinho-detalhe.component';

describe('CarrinhoDetalheComponent', () => {
  let component: CarrinhoDetalheComponent;
  let fixture: ComponentFixture<CarrinhoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrinhoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
