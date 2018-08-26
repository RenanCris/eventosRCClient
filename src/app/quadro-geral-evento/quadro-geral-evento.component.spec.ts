import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroGeralEventoComponent } from './quadro-geral-evento.component';

describe('QuadroGeralEventoComponent', () => {
  let component: QuadroGeralEventoComponent;
  let fixture: ComponentFixture<QuadroGeralEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadroGeralEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroGeralEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
